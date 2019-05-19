pragma solidity ^0.5.0;

import "./Gimicoin.sol";
import "./Ownable.sol";

contract Cagnottes is Gimicoin, Ownable{

event nouvelleDemamnde(string groupe, string pseudo);

// 1 chaque compte est représenté par un canal, ici on mapp
// chaque ID cannal sur ces informations structurelles
mapping (uint => channel) private mappChannel;
// 2  Ici on mappe tous les groupes dont fait parti une addresse
mapping (address => uint[]) private mappGroupesForAddress;
// 3 ici on mappe le nom d'un groupe avec la liste dees ID de ces membres
mapping (string => uint[]) private mappGroupeAndChannels;
// 4 Ici on mappe les ID des groupes avec leur nom
mapping (uint => string) private mappIDGroupe;
// 5 Ici on mappe les groupes crées par une addresse
mapping (address => uint[]) private mappOwnedGroup;
// 6 Ici on mappe l'addresse du créateur d'un gnom de groupe
mapping (string => address) private mappGroupeOwner;
// 7 Ici on mappe le pseudo d'un channel avec sson ID
mapping (string => uint) private mappPseudoToID;
// 8 Ici on mappe une addresse dans un groupe avec son canal
mapping (uint => mapping (address => uint)) private mappChannelInGroup;
// 9 Ici on mappe les statististiques 2 a 2
mapping (address => mapping (address => uint)) private mappStats;

// montant maximum d'une demande
uint private MAX_AMOUNT;
// montant minimum d'une demande
uint private MIN_AMOUNT;
// charges recoltes par le contrat a chaque paiement (montant/PRICE_RATIO)
uint private PRICE_RATIO;
// prix de la creation d un groupe
uint private PRICE_GROUP;
// prix de l ajout d'un membre a un groupe
uint private PRICE_MEMBRE;
// prix de l'ouverture d'une demande
uint private PRICE_CHANEL;
// montant total des charges recoltes
uint internal LOTTERY_CAGNOTTE;

struct channel
{
  address demandeur;
  string pseudo;
  string groupe;
  uint montant;
  uint enCours;
  string description;
  uint prediction;
}

constructor() public
{
  MAX_AMOUNT = 100000000000000000000;
  MIN_AMOUNT = 100000;
  PRICE_RATIO = 200;
  PRICE_GROUP = 1000;
  PRICE_MEMBRE = 100;
  PRICE_CHANEL = 10;
}

function creerGroupe(string memory _nom, string memory _pseudo) payable public
{
  // On verifie que la creation de groupe est bien payee
  require(PRICE_GROUP == msg.value);
  // On cree un identifiant du groupe
  uint IDGroupe = uint(keccak256(bytes(_nom)));
  // Que le nom du groupe n'existe pas deja
  require(mappGroupeOwner[_nom] == address(0));
  // On cree un identifiant de l'utilisateur
  uint channelID = uint(keccak256(bytes(_pseudo)));
  // On verifi que l'utilisateur n'existe pas deja
  require(mappChannel[channelID].demandeur == address(0));
  // On ajoute le createur dans le groupe
  mappChannel[channelID].demandeur = msg.sender;
  mappIDGroupe[IDGroupe] = _nom;
  // Le nom du groupe a l'addresse de son createur
  mappGroupeOwner[_nom] = msg.sender;
  // On ajoute le groupe a la liste des de groupe crees par le createur (administrateur)
  mappOwnedGroup[msg.sender].push(IDGroupe);
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
  // On ajoute le groupe a la liste des groupes auxquel le membre est membre
  mappGroupesForAddress[_membre].push(IDGroupe);
  // On prepare l'instanciation du canal de demande
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
  mappChannelInGroup[groupeID][msg.sender] = channelID;
}

function demander(uint _montant, string memory _pseudo, string memory _description) payable public
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
  mappChannel[channelID].description = _description;

  emit nouvelleDemamnde(mappChannel[channelID].groupe, _pseudo);
}

function payerCanal(string memory _pseudo) public payable
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].montant != 0);
  require(mappChannel[_channelID].montant - mappChannel[_channelID].enCours >= msg.value);
  uint fees = uint(msg.value / PRICE_RATIO);
  uint addValue;
  addValue = msg.value;
  addValue -= fees;
  mappChannel[_channelID].enCours += addValue;
  mappStats[msg.sender][mappChannel[_channelID].demandeur] += addValue;
  LOTTERY_CAGNOTTE += uint(fees.div(2));
  _mint(msg.sender,fees);
}

function fermetureCanal(string memory _pseudo) public
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].montant != 0);
  require(mappChannel[_channelID].demandeur == msg.sender);
  msg.sender.transfer(mappChannel[_channelID].enCours);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].montant = 0;
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

function modifierCharges(uint _priceRatio) public onlyOwner
{
  PRICE_RATIO = _priceRatio;
}

function modifierPriceGroup(uint _priceGroup) public onlyOwner
{
  PRICE_GROUP = _priceGroup;
}

function modifierPriceMember(uint _priceMember) public onlyOwner
{
  PRICE_MEMBRE = _priceMember;
}

function getPriceGroup() public view returns (uint)
{
  return PRICE_GROUP;
}

function getPriceMember() public view returns (uint)
{
  return PRICE_MEMBRE;
}

function getPriceChannel() public view returns (uint)
{
  return PRICE_CHANEL;
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

function getAddresse(string memory _pseudo) public view returns (address)
{
  return mappChannel[mappPseudoToID[_pseudo]].demandeur;
}

function getMontant(string memory _pseudo) public view returns (uint)
{
  return mappChannel[mappPseudoToID[_pseudo]].montant;
}

function getEncours(string memory _pseudo) public view returns (uint)
{
  return mappChannel[mappPseudoToID[_pseudo]].enCours;
}

function getReceptions(string memory _pseudo) public view returns (uint)
{
  return mappStats[mappChannel[uint(keccak256(bytes(_pseudo)))].demandeur][msg.sender];
}

function getDonnations(string memory _pseudo) public view returns (uint)
{
  return mappStats[msg.sender][mappChannel[uint(keccak256(bytes(_pseudo)))].demandeur];
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

}
