pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./Gimicoin.sol";
import "./Ownable.sol";

contract Cagnottes is Gimicoin, Ownable {

Gimicoin public myGimicoin;

mapping (uint => channel) private mappChannel;
mapping (string => uint) private mappNomGroupe;
mapping (uint => address[]) private mappGroupe;
mapping (uint => address[]) private mappGroupeAdmin;
mapping (string => address) private mappPseudo;
mapping (address => uint[]) private mappGroupesForAddress;

enum EtatCanal {ACTIF, FERME}

uint MAX_MEMBRE;
uint MAX_DELAI;
uint MAX_AMOUNT;
uint MIN_AMOUNT;
uint PRICE_RATIO;

struct channel
{
  address demandeur;
  uint montant;
  uint blocFermeture;
  EtatCanal etat;
  uint groupe;
  uint enCours;
  uint donnations;
  string memory description;
}

constructor() public
{
  MAX_MEMBRE = 10;
  MAX_DELAI = 10;
  MAX_AMOUNT = 10000000000000;
  MIN_AMOUNT = 100000;
  PRICE_RATIO = 10;
}

function modifierDelai(uint _maxDelai) public onlyOwner
{
  require(_maxDelai >= 10 && _maxDelai <= 1000000000);
  MAX_DELAI = _maxDelai;
}

function modifierMaxMembre(uint _maxMembre) public onlyOwner
{
  require(_maxMembre >= 5 && _maxMembre <= 200);
  MAX_MEMBRE = _maxMembre;
}

function modifierMaxAmount(uint _maxAmount) public onlyOwner
{
  require(_maxAmount >= 10000000 && _maxAmount <= 10000000000000);
  MAX_AMOUNT = _maxAmount;
}

function modifierMinAmount(uint _minAmount) public onlyOwner
{
  require(_minAmount >= 100000 && _minAmount <= 1000000);
  MIN_AMOUNT = _minAmount;
}

function modifierPriceChannel(uint _priceChannel) public onlyOwner
{
  require(_priceChannel > 1);
  PRICE_RATIO = _priceChannel;
}

function creerGroupe(string memory Nom) public
{
  require(mappNomGroupe[Nom]==0);
  uint IDGroupe = uint(keccak256(bytes(Nom)));
  mappNomGroupe[Nom] = IDGroupe;
  mappGroupe[IDGroupe].push(msg.sender);
  mappGroupeAdmin[IDGroupe].push(msg.sender);
  mappGroupesForAddress[msg.sender].push(IDGroupe);
}

function ajouterMembre(address _membre, uint _groupe, string memory _pseudo) public
{
  require(mappGroupe[_groupe].length<MAX_MEMBRE);
  require(mappPseudo[_pseudo]==address(0));
  for (uint i=0;i<mappGroupeAdmin[_groupe].length;i++)
  {
      if (mappGroupeAdmin[_groupe][i] == msg.sender)
      {
        mappPseudo[_pseudo]=_membre;
        mappGroupesForAddress[_membre].push(_groupe);
        mappGroupe[IDGroupe].push(_membre);
        break;
      }
  }
}

function ajouterAdmin(address _membre, uint _groupe) public
{
  for (uint j=0;j<mappGroupeAdmin[_groupe].length;j++)
  {
      if (mappGroupeAdmin[_groupe][j] == msg.sender)
      {
        for (uint i=0;i<mappGroupe[_groupe].length;i++)
        {
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

function creerCanal(uint _groupe, uint _montant, uint _delai, string memory _pseudo, string memory _description) payable public
{
    require(_montant > MIN_AMOUNT && _montant < MAX_AMOUNT);
    require(mappPseudo[_pseudo]==msg.sender);
    uint min = uint(_montant / PRICE_RATIO);
    require(msg.value >= min);
    for (uint i=0;i<mappGroupe[_groupe].length;i++)
    {
      if (mappGroupe[_groupe][i] == msg.sender)
      {
        uint channelID = uint(keccak256(bytes(_pseudo)));
        require(mappChannel[channelID].etat!=EtatCanal.ACTIF);
        require(mappChannel[channelID].cible!=address(0));
        mappChannel[channelID].montant=_montant;
        mappChannel[channelID].enCours=msg.value - min;
        mappChannel[channelID].etat=EtatCanal.ACTIF;
        mappChannel[channelID].blocFermeture=block.number+_delai;
        mappChannel[channelID].groupe = _groupe;
        mappChannel[channelID].demandeur = msg.sender;
        mappChannel[channelID].description = _description;
        break;
      }
  }
}

function payerCanal(uint _groupe, uint _channelID, string memory _pseudo, uint _token) payable public
{
  require(mappChannel[_channelID].groupe == _groupe);
  require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
  require(mappChannel[_channelID].blocFermeture>=block.number);
  require(mappPseudo[_pseudo]==msg.sender);
  require(balanceOf(msg.sender) >= _token);
  for (uint i=0;i<mappGroupe[_groupe].length;i++)
  {
      if (mappGroupe[_groupe][i] == msg.sender)
      {
        uint fees = uint(msg.value / PRICE_RATIO);
        _mint(msg.sender,fees);
        uint addValue = msg.value;
      if (_token > 0)
      {
        addValue += _token;
        _burnFrom(msg.sender,_token);
      }
      mappChannel[uint(keccak256(bytes(_pseudo)))].donnations += addValue;
      addValue -= fees;
      mappChannel[_channelID].enCours+=addValue;
      }
  }
}

function fermetureCanal(uint _channelID, uint _groupe) public
{
  require(mappChannel[_channelID].groupe==_groupe);
  require(mappChannel[_channelID].blocFermeture<=block.number);
  require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
  require(mappChannel[_channelID].demandeur==msg.sender);
  msg.sender.transfer(mappChannel[_channelID].enCours);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].etat=EtatCanal.FERME;
  mappChannel[_channelID].description="";
}

function consommerTokens(uint _token) public
{
  require(balanceOf(msg.sender) >= _token);
  msg.sender.transfer(_token);
  _burnFrom(msg.sender,_token);
}

function getGroupesPerAddress(address _address) public
{

}

function getMembresAndStat(uint groupe) public
{

}

}
