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
mapping (string => address) private mappPseudo;

mapping (uint => mapping (address => uint)) private mappPseudoInGroup;

uint public MAX_DELAI;
uint public MAX_AMOUNT;
uint public MIN_AMOUNT;
uint public PRICE_RATIO;
uint public TIME_TOKEN_WITHDRAW;
uint public LAPS_TIME_TOKEN_WITHDRAW;
uint public TOKEN_BONUS;
uint public DESERVERVE_BONUS;
uint public PRICE_GROUP;
uint public PRICE_MEMBRE;
uint public PRICE_CHANNEL;

struct channel
{
  address demandeur;
  string pseudo;
  uint montant;
  uint blocFermeture;
  bool actif;
  uint enCours;
  uint donnations;
  uint receptions;
  string description;
  address contratCible;
}

constructor() public
{
  MAX_DELAI = 200;
  MAX_AMOUNT = 10000000000000;
  MIN_AMOUNT = 10000;
  PRICE_RATIO = 100;
  TIME_TOKEN_WITHDRAW = 10000000000;
  LAPS_TIME_TOKEN_WITHDRAW = 100000;
  TOKEN_BONUS = 0;
  DESERVERVE_BONUS = 1000000;
  PRICE_GROUP = 100;
  PRICE_MEMBRE = 10;
  PRICE_CHANNEL = 1;
}

function creerGroupe(string memory _nom, string memory _pseudo) payable public
{
  require(PRICE_GROUP == msg.value);
  require(mappNomGroupe[_nom] == 0);
  require(mappPseudo[_pseudo] == address(0));
  mappPseudo[_pseudo] = msg.sender;
  uint IDGroupe = uint(keccak256(bytes(_nom)));
  mappNomGroupe[_nom] = IDGroupe;
  mappGroupeOwner[_nom] = msg.sender;
  mappIDGroupe[IDGroupe] = _nom;
  mappGroupe[_nom].push(msg.sender);
  mappGroupesForAddress[msg.sender].push(IDGroupe);
  creerCanal(_pseudo, _nom, msg.sender);
}

function ajouterMembre(address _membre, string memory _groupe, string memory _pseudo) payable public
{
  require(PRICE_MEMBRE == msg.value);
  require(mappPseudo[_pseudo] == address(0));
  require(mappGroupeOwner[_groupe] == msg.sender);
  mappPseudo[_pseudo] = _membre;
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  mappGroupesForAddress[_membre].push(IDGroupe);
  mappGroupe[_groupe].push(_membre);
  creerCanal(_pseudo, _groupe, _membre);
}

function creerCanal(string memory _pseudo, string memory _groupe, address _membre) private
{
  uint channelID = uint(keccak256(bytes(_pseudo)));
  uint groupeID = uint(keccak256(bytes(_groupe)));
  require(mappPseudo[_pseudo] == _membre);
  mappChannel[channelID].actif = false;
  mappChannel[channelID].pseudo = _pseudo;
  mappChannel[channelID].demandeur = msg.sender;
  mappGroupeAndChannels[_groupe].push(channelID);
  mappPseudoInGroup[groupeID][msg.sender] = channelID;
}

function demander(uint _montant, uint _delai, string memory _pseudo, string memory _description, address _contrat) payable public
{
  require(PRICE_CHANNEL == msg.value);
  require(mappPseudo[_pseudo] == msg.sender);
  require(_delai <= MAX_DELAI);
  uint channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[channelID].actif == false);
  mappChannel[channelID].montant = _montant;
  mappChannel[channelID].actif = true;
  mappChannel[channelID].blocFermeture = block.number+_delai;
  mappChannel[channelID].description = _description;
  mappChannel[channelID].contratCible = _contrat;
}

function payerCanal(string memory _pseudo, address _address) public payable
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].demandeur == _address);
  require(mappChannel[_channelID].montant > mappChannel[_channelID].enCours);
  require(mappChannel[_channelID].actif == true);
  require(mappChannel[_channelID].blocFermeture >= block.number);
  uint fees = uint(msg.value / PRICE_RATIO);
  _mint(msg.sender,msg.value.sub(fees));
  uint addValue = msg.value;
  mappChannel[uint(keccak256(bytes(_pseudo)))].donnations.add(addValue);
  addValue.sub(fees);
  mappChannel[_channelID].receptions.add(addValue);
  mappChannel[_channelID].enCours.add(addValue);
}

function fermetureCanal(string memory _pseudo) public
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].actif == true);
  require(mappChannel[_channelID].demandeur == msg.sender);
  msg.sender.transfer(mappChannel[_channelID].enCours);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].montant = 0;
  mappChannel[_channelID].blocFermeture = 0;
  mappChannel[_channelID].actif = false;
  mappChannel[_channelID].description = "";
  mappChannel[_channelID].contratCible = address(0);
}

function withdrawEther(uint _amount) public onlyOwner
{
  msg.sender.transfer(_amount);
}

function tokenToEther() public
{
  require(block.number % TIME_TOKEN_WITHDRAW  >= 0 && block.number % TIME_TOKEN_WITHDRAW <= LAPS_TIME_TOKEN_WITHDRAW);
  uint monBonus = uint(balanceOf(msg.sender).div(DESERVERVE_BONUS));
  monBonus.mul(TOKEN_BONUS);
  msg.sender.transfer(balanceOf(msg.sender).add(monBonus));
  _burnFrom(msg.sender,balanceOf(msg.sender));
}

function modifierMeriteBonus(uint _seuil) public onlyOwner
{
  DESERVERVE_BONUS = _seuil;
}

function modifierTokenBonus(uint _tokenBonus) public onlyOwner
{
  TOKEN_BONUS = _tokenBonus;
}

function modifierLapsTimeToWithdraw(uint _laspsTime) public onlyOwner
{
  LAPS_TIME_TOKEN_WITHDRAW = _laspsTime;
}

function modifierTimeToWithdraw(uint _TimeToWithdraw) public onlyOwner
{
  TIME_TOKEN_WITHDRAW = _TimeToWithdraw;
}

function modifierDelai(uint _maxDelai) public onlyOwner
{
  MAX_DELAI = _maxDelai;
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

function modifierPriceDemand(uint _priceDemand) public onlyOwner
{
  PRICE_CHANNEL = _priceDemand;
}

function getGroupesPerAddress() public view returns (uint[] memory)
{
  return mappGroupesForAddress[msg.sender];
}

function getMembres(string memory _groupe) public view returns (uint[] memory)
{
  return mappGroupeAndChannels[_groupe];
}

function getNomMembre(uint _ID) public view returns (string memory)
{
  return mappChannel[_ID].pseudo;
}

function getContratCible(uint _ID) public view returns (address)
{
  return mappChannel[_ID].contratCible;
}

function getMontant(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].montant;
}

function getBlockFermeture(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].blocFermeture;
}

function getEncours(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].enCours;
}

function getDonnations(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].donnations;
}

function getDemandeur(uint _ID) public view returns (address)
{
  return mappChannel[_ID].demandeur;
}

function getReceptions(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].receptions;
}

function getTime(uint _ID) public view returns (uint)
{
  if (mappChannel[_ID].blocFermeture <= block.number)
  {
    return 0;
  }
  else return mappChannel[_ID].blocFermeture - block.number;
}

function getNomGroupe(uint _ID) public view returns (string memory)
{
  return mappIDGroupe[_ID];
}

function getOwnedGroupe() public view returns (uint[] memory)
{
  return mappOwnedGroup[msg.sender];
}

function getPseudoInGroup(string memory _groupe, address _address) public view returns (string memory)
{
  uint IDGroupe = uint(keccak256(bytes(_groupe)));
  return mappChannel[mappPseudoInGroup[IDGroupe][_address]].pseudo;
}

}
