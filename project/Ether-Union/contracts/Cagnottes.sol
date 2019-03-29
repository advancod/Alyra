pragma solidity ^0.5.0;

import "./Gimicoin.sol";
import "./Ownable.sol";

contract Cagnottes is Gimicoin, Ownable{

mapping (uint => channel) private mappChannel;
mapping (address => uint[]) private mappGroupesForAddress;
mapping (string => uint[]) private mappGroupeAndChannels;
mapping (uint => string) private mappIDGroupe;
mapping (address => uint[]) private mappOwnedGroup;
mapping (string => address) private mappGroupeOwner;
mapping (string => uint) private mappNomGroupe;
mapping (string => address[]) private mappGroupe;
mapping (string => uint) private mappPseudoToID;
mapping (uint => mapping (address => uint)) private mappPseudoInGroup;

uint public MAX_AMOUNT;
uint public MIN_AMOUNT;
uint public PRICE_RATIO;
uint public PRICE_GROUP;
uint public PRICE_MEMBRE;
uint public PRICE_CHANEL;
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
  require(PRICE_GROUP == msg.value);
  require(mappNomGroupe[_nom] == 0);
  uint channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[channelID].demandeur == address(0));
  uint IDGroupe = uint(keccak256(bytes(_nom)));
  mappChannel[channelID].demandeur = msg.sender;
  mappNomGroupe[_nom] = IDGroupe;
  mappGroupeOwner[_nom] = msg.sender;
  mappOwnedGroup[msg.sender].push(IDGroupe);
  mappIDGroupe[IDGroupe] = _nom;
  mappGroupe[_nom].push(msg.sender);
  mappGroupesForAddress[msg.sender].push(IDGroupe);
  creerCanal(_pseudo, _nom, IDGroupe, channelID);
}

function ajouterMembre(address _membre, string memory _groupe, string memory _pseudo) payable public
{
  require(PRICE_MEMBRE == msg.value);
  uint channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[channelID].demandeur == address(0));
  require(mappGroupeOwner[_groupe] == msg.sender);
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  require(mappPseudoInGroup[IDGroupe][msg.sender] == 0);
  mappChannel[channelID].demandeur = msg.sender;
  mappGroupesForAddress[_membre].push(IDGroupe);
  mappGroupe[_groupe].push(_membre);
  creerCanal(_pseudo, _groupe, IDGroupe, channelID);
}

function creerCanal(string memory _pseudo, string memory _groupe, uint groupeID, uint channelID) private
{
  mappChannel[channelID].pseudo = _pseudo;
  mappChannel[channelID].groupe = _groupe;
  mappGroupeAndChannels[_groupe].push(channelID);
  mappPseudoToID[_pseudo] = channelID;
  mappPseudoInGroup[groupeID][msg.sender] = channelID;
}

function demander(uint _montant, string memory _pseudo, address _contratCible, string memory _description) payable public
{
  require(msg.value == PRICE_CHANEL);
  require(_montant > MIN_AMOUNT);
  require(_montant < MAX_AMOUNT);
  uint channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[channelID].demandeur == msg.sender);
  require(mappChannel[channelID].montant == 0);
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
  return mappChannel[mappPseudoInGroup[IDGroupe][msg.sender]].pseudo;
}

function withdrawCash(uint _montant) public onlyOwner
{
  msg.sender.transfer(_montant);
}

}
