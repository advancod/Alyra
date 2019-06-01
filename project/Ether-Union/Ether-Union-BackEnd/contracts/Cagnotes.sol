pragma solidity ^0.5.0;

import "./Coinunion.sol";
import "./Ownable.sol";

contract Cagnotes is Coinunion, Ownable{

event nouvelleDemande(string groupe, string pseudo);

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
// 10 Tous les pseudos d'une addresse
mapping (address => uint[]) private mappPseudosForAddress;
// 11 nombre de groupes par addresse
mapping (address => uint) private mappNbGroupe;
// 12 nombre de membres par groupe
mapping (uint => uint) private mappNbMembre;

// charges recoltes par le contrat a chaque paiement (montant/PRICE_RATIO)
uint private PRICE_RATIO;
// montant total des charges recoltes
uint internal LOTERY_CAGNOTE;
// recupération de la caisse (égal cagnote, égal moitié des charges)
uint private MONEY;

struct channel
{
  address demandeur;
  string pseudo;
  string groupe;
  uint montant;
  uint enCours;
  string description;
}

constructor() public
{
  //charges
  PRICE_RATIO = 200;
  MAX_GROUP = 1000;
  MAX_MEMBRE = 1000;
}

function creerGroupe(string memory _nom, string memory _pseudo) public
{
  // On cree un identifiant du groupe
  uint IDGroupe = uint(keccak256(bytes(_nom)));
  // Que le nom du groupe n'existe pas deja
  require(mappGroupeOwner[_nom] == address(0));
  require(mappNbGroupe[msg.sender] <= MAX_GROUP);
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
  mappNbGroupe[msg.sender] += 1;
  // On instancie le canal de demande du createur dans le groupe
  creerCanal(_pseudo, _nom, IDGroupe, channelID, msg.sender);
}

function ajouterMembre(address _membre, string memory _groupe, string memory _pseudo) public
{
  // On cree un identifiant du nouveau membre
  uint channelID = uint(keccak256(bytes(_pseudo)));
  // On verifi que ce membre n'existe pas deja
  require(mappChannel[channelID].demandeur == address(0));
  // On verifi que l'ajouteur est le createur du groupe
  require(mappGroupeOwner[_groupe] == msg.sender);
  // On regarde lidentifiant du groupe par rapport a son nom
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  require(mappNbMembre[IDGroupe] <= MAX_MEMBRE);
  // On ajoute le groupe a la liste des groupes auxquel le membre est membre
  mappGroupesForAddress[_membre].push(IDGroupe);
  // On prepare l'instanciation du canal de demande
  mappChannel[channelID].demandeur = _membre;
  mappNbMembre[IDGroupe] += 1;
  creerCanal(_pseudo, _groupe, IDGroupe, channelID, _membre);
}

function creerCanal(string memory _pseudo, string memory _groupe, uint groupeID, uint channelID, address _addresse) private
{
  // on saisi les constantes du canal de demande propre au nouveau membre
  mappChannel[channelID].pseudo = _pseudo;
  mappChannel[channelID].groupe = _groupe;
  mappGroupeAndChannels[_groupe].push(channelID);
  mappPseudoToID[_pseudo] = channelID;
  mappPseudosForAddress[_addresse].push(channelID);
  mappChannelInGroup[groupeID][_addresse] = channelID;
}

function demander(uint _montant, string memory _pseudo, string memory _description) public
{
  // On verifi que l'appelant est bien le membre
  uint channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[channelID].demandeur == msg.sender);
  // On verifi qu'une demande n'est pas en cours pour ce membre
  require(mappChannel[channelID].montant == 0);
  // On saisi les infos de la demande
  mappChannel[channelID].montant = _montant;
  mappChannel[channelID].description = _description;
  emit nouvelleDemande(mappChannel[channelID].groupe, _pseudo);
}

function payerCanal(string memory _pseudo) public payable
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].montant != 0);
  require(mappChannel[_channelID].montant.sub(mappChannel[_channelID].enCours) >= msg.value);
  uint fees = msg.value.div(PRICE_RATIO);
  uint addValue;
  addValue = msg.value;
  addValue.sub(fees);
  mappChannel[_channelID].enCours += addValue;
  mappStats[msg.sender][mappChannel[_channelID].demandeur] += addValue;
  LOTERY_CAGNOTE += fees.div(2);
  MONEY += fees.div(2);
  _mint(msg.sender,fees);
}

function solderCanal(string memory _pseudo) public
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].demandeur == msg.sender);
  msg.sender.transfer(mappChannel[_channelID].enCours);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].montant = 0;
  mappChannel[_channelID].description = "";
}

function payOwner() public onlyOwner
{
  msg.sender.transfer(MONEY);
  MONEY = 0;
}

function modifierCharges(uint _priceRatio) public onlyOwner
{
  PRICE_RATIO = _priceRatio;
}

function modifierMaxGroupe(uint _max) public onlyOwner
{
  MAX_GROUP = _max;
}

function modifierMaxMembres(uint _max) public onlyOwner
{
  MAX_MEMBRE = _max;
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

function getAllPseudos() public view returns (uint[] memory)
{
  return mappPseudosForAddress[msg.sender];
}

function getPseudoInGroup(string memory _groupe) public view returns (string memory)
{
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  return mappChannel[mappChannelInGroup[IDGroupe][msg.sender]].pseudo;
}

}
