pragma solidity ^0.5.0;

import "./Gimicoin.sol";
import "./Ownable.sol";

contract Cagnottes is Gimicoin, Ownable {

Gimicoin public myGimicoin;

mapping (uint => channel) internal mappChannel;
mapping (address => uint[]) internal mappGroupesForAddress;
mapping (string => uint[]) internal mappGroupeAndChannels;
mapping (uint => string) internal mappIDGroupe;

mapping (string => uint) private mappNomGroupe;
mapping (string => address[]) private mappGroupe;
mapping (string => address[]) private mappGroupeAdmin;
mapping (string => address) private mappPseudo;

uint MAX_MEMBRE;
uint MAX_DELAI;
uint MAX_AMOUNT;
uint MIN_AMOUNT;
uint PRICE_RATIO;
uint MAX_GROUPS;

struct channel
{
  address demandeur;
  string pseudo;
  uint montant;
  uint blocFermeture;
  bool actif;
  uint enCours;
  uint donnations;
  string description;
}

constructor() public
{
  MAX_GROUPS = 50;
  MAX_MEMBRE = 10;
  MAX_DELAI = 20;
  MAX_AMOUNT = 10000000000000;
  MIN_AMOUNT = 100000;
  PRICE_RATIO = 100;
}

function creerGroupe(string memory _nom, string memory _pseudo) payable public
{
  require(mappNomGroupe[_nom] == 0);
  require(mappGroupesForAddress[msg.sender].length < MAX_GROUPS);
  require(mappPseudo[_pseudo] == address(0));
  uint IDGroupe = uint(keccak256(bytes(_nom)));
  mappNomGroupe[_nom] = IDGroupe;
  mappIDGroupe[IDGroupe] = _nom;
  mappGroupe[_nom].push(msg.sender);
  mappGroupeAdmin[_nom].push(msg.sender);
  mappGroupesForAddress[msg.sender].push(IDGroupe);
  creerCanal(_pseudo, _nom);
}

function ajouterMembre(address _membre, string memory _groupe, string memory _pseudo) public
{
  require(mappGroupe[_groupe].length < MAX_MEMBRE);
  require(mappPseudo[_pseudo] == address(0));
  for (uint i = 0;i < mappGroupeAdmin[_groupe].length;i++)
  {
      if (mappGroupeAdmin[_groupe][i] == msg.sender)
      {
        uint IDGroupe = uint(keccak256(bytes(_groupe)));
        mappGroupesForAddress[_membre].push(IDGroupe);
        mappGroupe[_groupe].push(_membre);
        creerCanal(_pseudo, _groupe);
        break;
      }
  }
}

function ajouterAdmin(address _membre, string memory _groupe) public
{
  for (uint j = 0;j < mappGroupeAdmin[_groupe].length;j++)
  {
      if (mappGroupeAdmin[_groupe][j] == msg.sender)
      {
        for (uint i = 0;i < mappGroupe[_groupe].length;i++)
        {
            if (mappGroupe[_groupe][i] == _membre)
            {
              mappGroupeAdmin[_groupe].push(_membre);
              break;
            }
        }
        break;
      }
  }
}

function creerCanal(string memory _pseudo, string memory _groupe) private
{
    uint channelID = uint(keccak256(bytes(_pseudo)));
    require(mappPseudo[_pseudo] == msg.sender);
    mappChannel[channelID].actif = false;
    mappChannel[channelID].pseudo = _pseudo;
    mappChannel[channelID].demandeur = msg.sender;
    mappGroupeAndChannels[_groupe].push(channelID);
}

function demander(uint _montant, uint _delai, string memory _pseudo, string memory _description) payable public
{
    require(_montant >= MIN_AMOUNT && _montant <= MAX_AMOUNT);
    require(mappPseudo[_pseudo] == msg.sender);
    uint min = uint(_montant / PRICE_RATIO);
    require(msg.value >= min);
    uint channelID = uint(keccak256(bytes(_pseudo)));
    require(mappChannel[channelID].actif == false);
    mappChannel[channelID].montant = _montant;
    mappChannel[channelID].enCours = msg.value - min;
    mappChannel[channelID].actif = true;
    mappChannel[channelID].blocFermeture = block.number+_delai;
    mappChannel[channelID].description = _description;
}

function payerCanal(string memory _groupe, string memory _pseudo, uint _token) payable public
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].actif == true);
  require(mappChannel[_channelID].blocFermeture >= block.number);
  require(mappChannel[_channelID].demandeur == msg.sender);
  require(balanceOf(msg.sender) >= _token);
  for (uint i = 0;i < mappGroupe[_groupe].length;i++)
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

function fermetureCanal(string memory _pseudo) public
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].blocFermeture <= block.number);
  require(mappChannel[_channelID].actif == true);
  require(mappChannel[_channelID].demandeur == msg.sender);
  msg.sender.transfer(mappChannel[_channelID].enCours);
  mappChannel[_channelID].enCours = 0;
  mappChannel[_channelID].montant = 0;
  mappChannel[_channelID].blocFermeture = 0;
  mappChannel[_channelID].actif = false;
  mappChannel[_channelID].description = "";
}

function consommerTokens(uint _token) public
{
  require(balanceOf(msg.sender) >= _token);
  msg.sender.transfer(_token);
  _burnFrom(msg.sender,_token);
}

}
