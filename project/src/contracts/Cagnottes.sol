pragma solidity ^0.5.0;

import "./Gimicoin.sol";
import "./Ownable.sol";

contract Cagnottes is Gimicoin, Ownable {

mapping (uint => channel) internal mappChannel;
mapping (address => uint[]) internal mappGroupesForAddress;
mapping (string => uint[]) internal mappGroupeAndChannels;
mapping (uint => string) internal mappIDGroupe;
mapping (address => uint[]) internal mappOwnedGroup;

mapping (string => address) private mappGroupeOwner;
mapping (string => uint) private mappNomGroupe;
mapping (string => address[]) private mappGroupe;
mapping (string => address) private mappPseudo;

uint internal MAX_MEMBRE;
uint internal MAX_DELAI;
uint internal MAX_AMOUNT;
uint internal MIN_AMOUNT;
uint internal PRICE_RATIO;
uint internal MAX_GROUPS;

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
  address contratCible;
}

constructor() public
{
  MAX_GROUPS = 50;
  MAX_MEMBRE = 10;
  MAX_DELAI = 200;
  MAX_AMOUNT = 10000000000000;
  MIN_AMOUNT = 10000;
  PRICE_RATIO = 100;
}

function creerGroupe(string memory _nom, string memory _pseudo) public
{
  require(mappNomGroupe[_nom] == 0);
  require(mappGroupesForAddress[msg.sender].length < MAX_GROUPS);
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

function ajouterMembre(address _membre, string memory _groupe, string memory _pseudo) public
{
  require(mappGroupe[_groupe].length < MAX_MEMBRE);
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
    require(mappPseudo[_pseudo] == _membre);
    mappChannel[channelID].actif = false;
    mappChannel[channelID].pseudo = _pseudo;
    mappChannel[channelID].demandeur = msg.sender;
    mappGroupeAndChannels[_groupe].push(channelID);
}

function demander(uint _montant, uint _delai, string memory _pseudo, string memory _description, address _contrat) public payable
{
   require(mappPseudo[_pseudo] != address(0));
   require(mappPseudo[_pseudo] == msg.sender);
   require(_montant >= MIN_AMOUNT && _montant <= MAX_AMOUNT);
   require(_delai <= MAX_DELAI);
   uint fees = uint(_montant / PRICE_RATIO);
   require(msg.value >= fees);
   uint channelID = uint(keccak256(bytes(_pseudo)));
   require(mappChannel[channelID].actif == false);
   mappChannel[channelID].montant = _montant;
   mappChannel[channelID].enCours = msg.value - fees;
   mappChannel[channelID].actif = true;
   mappChannel[channelID].blocFermeture = block.number+_delai;
   mappChannel[channelID].description = _description;
   mappChannel[channelID].contratCible = _contrat;
}

function payerCanal(string memory _pseudo, uint _token) public payable
{
  uint _channelID = uint(keccak256(bytes(_pseudo)));
  require(mappChannel[_channelID].montant > mappChannel[_channelID].enCours);
  require(mappChannel[_channelID].actif == true);
  require(mappChannel[_channelID].blocFermeture >= block.number);
  uint fees = uint(msg.value / PRICE_RATIO);
  _mint(msg.sender,msg.value.sub(fees));
  uint addValue = msg.value;
  if (_token > 0)
  {
    require(balanceOf(msg.sender) >= _token);
    if (_token + mappChannel[_channelID].enCours > mappChannel[_channelID].montant)
    {
      _token = mappChannel[_channelID].montant.sub(mappChannel[_channelID].enCours);
    }
    addValue += _token;
    _burnFrom(msg.sender,_token);
  }
  mappChannel[uint(keccak256(bytes(_pseudo)))].donnations += addValue;
  addValue -= fees;
  mappChannel[_channelID].enCours += addValue;
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

}
