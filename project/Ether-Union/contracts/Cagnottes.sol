pragma solidity ^0.5.0;

import "./Gimicoin.sol";
import "./Ownable.sol";

contract Cagnottes is Gimicoin, Ownable{

// 1 chaque compte est représenté par un canal, ici on mapp
// chaque ID cannal sur ces informations structurelles
mapping (uint => channel) private mappChannel;
// 2  Ici on mappe tous les groupes dont fait parti une addresse
mapping (address => uint[]) private mappGroupesForAddress;
// 3 ici on mappe le nom d'un groupe avec la liste dees ID de ces membres
mapping (string => uint[]) internal mappGroupeAndChannels;
// 4 Ici on mappe les ID des groupes avec leur nom
mapping (uint => string) private mappIDGroupe;
// 5 Ici on mappe les groupes crées par une addresse
mapping (address => uint[]) private mappOwnedGroup;
// 6 Ici on mappe l'addresse du créateur d'un gnom de groupe
mapping (string => address) private mappGroupeOwner;
// 7 Ici on mappe réciproquement avec 4 les ID et les nom de groupe
mapping (string => uint) private mappNomGroupe;
// 8 Ici on mappe le pseudo d'un channel avec sson ID
mapping (string => uint) private mappPseudoToID;
// 9 Ici on mappe une addresse dans un groupe avec son canal
mapping (uint => mapping (address => uint)) private mappChannelInGroup;

// montant maximum d'une demande
uint public MAX_AMOUNT;
// montant minimum d'une demanfe
uint public MIN_AMOUNT;
// charges recoltes par le contrat a chaque paiement (montant/PRICE_RATIO)
uint public PRICE_RATIO;
// prix de la creation d un groupe
uint public PRICE_GROUP;
// prix de l ajout d'un membre a un groupe
uint public PRICE_MEMBRE;
// prix de l'ouverture d'une demande
uint public PRICE_CHANEL;
// montant total des charges recoltes
uint public LOTTERY_CAGNOTTE;

struct channel
{
  address demandeur;
  string pseudo;
  string groupe;
  uint montant;
  uint enCours;
  uint donnations;
  uint receptions;
  address contratCible;
  string description;
  uint prediction;
}

constructor() public
{
  MAX_AMOUNT = 10000000000000000000;
  MIN_AMOUNT = 10000000;
  PRICE_RATIO = 100;
  PRICE_GROUP = 100000;
  PRICE_MEMBRE = 10000;
  PRICE_CHANEL = 1000;
}

function creerGroupe(string memory _nom, string memory _pseudo) payable public
{
  // On verifie que la creation de groupe est bien payee
  require(PRICE_GROUP == msg.value);
  // Que le nom du groupe n'existe pas deja
  require(mappNomGroupe[_nom] == 0);
  // On cree un identifiant de l'utilisateur
  uint channelID = uint(keccak256(bytes(_pseudo)));
  // On verifi que l'utilisateur n'existe pas deja
  require(mappChannel[channelID].demandeur == address(0));
  // On cree un identifiant du groupe
  uint IDGroupe = uint(keccak256(bytes(_nom)));
  // On ajoute le createur dans le groupe
  mappChannel[channelID].demandeur = msg.sender;
  // On associe le nom du groupe a son identifiant
  mappNomGroupe[_nom] = IDGroupe;
  mappIDGroupe[IDGroupe] = _nom;
  // Le nom du groupe a l'addresse de son createur
  mappGroupeOwner[_nom] = msg.sender;
  // On ajoute le groupe a la liste des de groupe crees par le createur (administrateur)
  mappOwnedGroup[msg.sender].push(IDGroupe);
  // On ajoute le groupe a la liste des groupes auxquel le createur est membre
  mappGroupesForAddress[msg.sender].push(IDGroupe);
  // On instancie le canal de demande du createur dans le groupe
  creerCanal(_pseudo, _nom, IDGroupe, channelID);
}

function ajouterMembre(address _membre, string memory _groupe, string memory _pseudo) payable public
{
  // On verifi que l ajout d'un membre a groupe est paye
  require(PRICE_MEMBRE == msg.value);
  // On cree un identifiant du nouveau membre
  uint channelID = uint(keccak256(bytes(_pseudo)));
  // On verifi que ce membre n'existe pas deja
  require(mappChannel[channelID].demandeur == address(0));
  // On verifi que l'ajouteur est le createur du groupe
  require(mappGroupeOwner[_groupe] == msg.sender);
  // On regarde lidentifiant du groupe par rapport a son nom
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  // On verifi que le createur ne s'ajoute pas lui meme
  require(mappChannelInGroup[IDGroupe][msg.sender] == 0);
  // On ajoute le groupe a la liste des groupes auxquel le membre est membre
  mappGroupesForAddress[_membre].push(IDGroupe);
  // On prepare l'instanciation du canl de demande
  mappChannel[channelID].demandeur = msg.sender;
  creerCanal(_pseudo, _groupe, IDGroupe, channelID);
}

function creerCanal(string memory _pseudo, string memory _groupe, uint groupeID, uint channelID) private
{
  // on saisi les constantes du canal de demande propre au nouveau membre
  mappChannel[channelID].pseudo = _pseudo;
  mappChannel[channelID].groupe = _groupe;
  mappGroupeAndChannels[_groupe].push(channelID);
  mappPseudoToID[_pseudo] = channelID;
  mappChannelInGroup [groupeID][msg.sender] = channelID;
}

function demander(uint _montant, string memory _pseudo, address _contratCible, string memory _description) payable public
{
  //On verifi que l'ouverture d'une demande est bien payee
  require(msg.value == PRICE_CHANEL);
  // On verifi que la montant repond au regles
  require(_montant > MIN_AMOUNT);
  require(_montant < MAX_AMOUNT);
  // On verifi que l'appelant est bien le membre
  uint channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[channelID].demandeur == msg.sender);
  // On verifi qu'une demande n'est pas en cours pour ce membre
  require(mappChannel[channelID].montant == 0);
  // On saisi les infos de la demande
  mappChannel[channelID].montant = _montant;
  mappChannel[channelID].contratCible = _contratCible;
  mappChannel[channelID].description = _description;
}

function payerCanal(string memory _pseudo) public payable
{
  require(msg.value > 0);
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].demandeur != msg.sender);
  uint fees = uint(msg.value / PRICE_RATIO);
  _mint(msg.sender,msg.value - fees);
  uint addValue;
  if (mappChannel[_channelID].montant > mappChannel[_channelID].enCours.add(msg.value))
  {
    addValue = mappChannel[_channelID].montant.sub(mappChannel[_channelID].enCours);
  }
  else addValue = msg.value;
  mappChannel[_channelID].donnations += addValue;
  addValue -= fees;
  mappChannel[_channelID].receptions += addValue;
  mappChannel[_channelID].enCours += addValue;
  LOTTERY_CAGNOTTE += fees;
}

function fermetureCanal(string memory _pseudo) public
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].montant != 0);
  require(mappChannel[_channelID].demandeur == msg.sender);
  msg.sender.transfer(mappChannel[_channelID].enCours);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].montant = 0;
  mappChannel[_channelID].contratCible = address(0);
  mappChannel[_channelID].description = "";
}

function modifierPriceChannel(uint _priceChannel) public onlyOwner
{
  PRICE_CHANEL = _priceChannel;
}

function modifierMaxAmount(uint _maxAmount) public onlyOwner
{
  MAX_AMOUNT = _maxAmount;
}

function modifierMinAmount(uint _minAmount) public onlyOwner
{
  MIN_AMOUNT = _minAmount;
}

function modifierCharges(uint _priceChannel) public onlyOwner
{
  PRICE_RATIO = _priceChannel;
}

function modifierPriceGroup(uint _priceGroup) public onlyOwner
{
  PRICE_GROUP = _priceGroup;
}

function modifierPriceMember(uint _priceMember) public onlyOwner
{
  PRICE_MEMBRE = _priceMember;
}

function getGroupesPerAddress() public view returns (uint[] memory)
{
  return mappGroupesForAddress[msg.sender];
}

function getMembres(string memory _groupe) public view returns (uint[] memory)
{
  return mappGroupeAndChannels[_groupe];
}

function getDescription(string memory _pseudo) public view returns (string memory)
{
  return mappChannel[mappPseudoToID[_pseudo]].description;
}

function getNomMembre(uint _ID) public view returns (string memory)
{
  return mappChannel[_ID].pseudo;
}

function getGroupe(string memory _pseudo) public view returns (string memory)
{
  return mappChannel[mappPseudoToID[_pseudo]].groupe;
}

function getMontant(string memory _pseudo) public view returns (uint)
{
  return mappChannel[mappPseudoToID[_pseudo]].montant;
}

function getEncours(string memory _pseudo) public view returns (uint)
{
  return mappChannel[mappPseudoToID[_pseudo]].enCours;
}

function getDonnations(string memory _pseudo) public view returns (uint)
{
  return mappChannel[mappPseudoToID[_pseudo]].donnations;
}

function getReceptions(string memory _pseudo) public view returns (uint)
{
  return mappChannel[mappPseudoToID[_pseudo]].receptions;
}

function getContratCible(string memory _pseudo) public view returns (address)
{
  return mappChannel[mappPseudoToID[_pseudo]].contratCible;
}

function getNomGroupe(uint _ID) public view returns (string memory)
{
  return mappIDGroupe[_ID];
}

function getOwnedGroupe() public view returns (uint[] memory)
{
  return mappOwnedGroup[msg.sender];
}

function getPseudoInGroup(string memory _groupe) public view returns (string memory)
{
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  return mappChannel[mappChannelInGroup[IDGroupe][msg.sender]].pseudo;
}

function withdrawCash(uint _montant) public onlyOwner
{
  msg.sender.transfer(_montant);
}

}
