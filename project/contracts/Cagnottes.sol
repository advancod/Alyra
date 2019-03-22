pragma solidity ^0.5.0;

import "./Gimicoin.sol";

contract Cagnottes is Gimicoin  {

Gimicoin public myGimicoin;

mapping (uint => channel) public mappChannel;
mapping (uint => address[]) public mappGroupe;
mapping (uint => address[]) public mappGroupeAdmin;
mapping (string => address) private mappPseudo;

event creationChannel(uint _groupe, uint _montant, uint _delai, string  _pseudo);
event fermetureChannel(uint _channelID, uint _groupe);
event majChannel(uint _groupe, uint _channelID, string  _pseudo, uint _balance);

enum EtatCanal {ACTIF, FERME}

uint IDGroupe;
uint MAX_MEMBRE;
uint MAX_DELAI;
uint MAX_AMOUNT;
uint PRICE_CHANNEL;
uint TOKEN_REWARD;

struct channel
{
  address demandeur;
  uint montant;
  uint blocFermeture;
  EtatCanal etat;
  uint groupe;
  uint enCours;
}

constructor(uint _maxMembre, uint _maxDelai, uint _maxAmount, uint _priceChannel) public onlyOwner
{
myGimicoin = new Gimicoin();
MAX_MEMBRE = _maxMembre;
MAX_DELAI = _maxDelai;
MAX_AMOUNT = _maxAmount;
PRICE_CHANNEL = _priceChannel;
TOKEN_REWARD = _priceChannel.mul(10);
}

function modifierDelai(uint _max) public onlyOwner
{
MAX_DELAI = _max;
}

function modifierMaxMembre(uint _max) public onlyOwner
{
MAX_MEMBRE = _max;
}

function modifierMaxAmount(uint _max) public onlyOwner
{
MAX_AMOUNT = _max;
}

function modifierPriceChannel(uint _price) public onlyOwner
{
PRICE_CHANNEL = _price;
}

function creerGroupe() public
{
  IDGroupe.add(1);
  mappGroupe[IDGroupe].push(msg.sender);
  mappGroupeAdmin[IDGroupe].push(msg.sender);
}

function creerCanal(uint _groupe, uint _montant, uint _delai, string memory _pseudo) payable public
{
    require(mappPseudo[_pseudo]==msg.sender);
    require(msg.value > _montant.div(PRICE_CHANNEL) );
    for (uint i=0;i<mappGroupe[_groupe].length;i++){
      if (mappGroupe[_groupe][i] == msg.sender)
      {
        uint channelID = uint(keccak256(bytes(_pseudo)));
        require(mappChannel[channelID].etat!=EtatCanal.ACTIF);
        mappChannel[channelID].montant=_montant;
        mappChannel[channelID].enCours=0;
        mappChannel[channelID].etat=EtatCanal.ACTIF;
        mappChannel[channelID].blocFermeture=block.number+_delai;
        mappChannel[channelID].groupe = _groupe;
        mappChannel[channelID].demandeur = msg.sender;
        emit creationChannel(_groupe, _montant, _delai, _pseudo);
        break;
      }
  }
}

function payerCanal(uint _groupe, uint _channelID, string memory _pseudo, uint _token) payable public returns (uint)
{
  require(mappChannel[_channelID].groupe == _groupe);
  require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
  require(mappChannel[_channelID].blocFermeture>=block.number);
  require(mappPseudo[_pseudo]==msg.sender);
  for (uint i=0;i<mappGroupe[_groupe].length;i++){
      if (mappGroupe[_groupe][i] == msg.sender)
      {
      uint addValue = _token.div(TOKEN_REWARD);
      uint newBalance = myGimicoin.balanceOf(msg.sender);
      addValue.add(msg.value);
      mappChannel[_channelID].enCours+=addValue;
      myGimicoin.mint(msg.sender,mappChannel[_channelID].enCours);
      emit majChannel(_groupe, _channelID, _pseudo, newBalance);
      return mappChannel[_channelID].enCours;
      }
  }
}

function fermetureCanal(uint _channelID, uint _groupe) public returns (uint){
  require(mappChannel[_channelID].groupe==_groupe);
  require(mappChannel[_channelID].blocFermeture<=block.number);
  require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
  require(mappChannel[_channelID].demandeur==msg.sender);
  uint total = mappChannel[_channelID].enCours;
  msg.sender.transfer(total);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].etat=EtatCanal.FERME;
  emit fermetureChannel(_channelID, _groupe);
  return total;
}

function ajouterMembre(address _membre, uint _groupe, string memory _pseudo) public
{
require(mappGroupe[_groupe].length<MAX_MEMBRE);
require(mappPseudo[_pseudo]==address(0));
mappPseudo[_pseudo]=msg.sender;
  for (uint i=0;i<mappGroupeAdmin[_groupe].length;i++){
      if (mappGroupeAdmin[_groupe][i] == msg.sender)
      {
        mappGroupe[IDGroupe].push(_membre);
        break;
      }
  }
}

function ajouterAdmin(address _membre, uint _groupe) public
{
  for (uint j=0;j<mappGroupeAdmin[_groupe].length;j++){
      if (mappGroupeAdmin[_groupe][j] == msg.sender)
      {
        for (uint i=0;i<mappGroupe[_groupe].length;i++){
            if (mappGroupe[_groupe][i] == _membre)
            {
              mappGroupeAdmin[IDGroupe].push(_membre);
              break;
            }
        }
        break;
      }
  }
}

}
