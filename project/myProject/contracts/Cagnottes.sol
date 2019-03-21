pragma solidity ^0.5.0;

import "./Gimicoin.sol";

contract Cagnottes is Gimicoin  {

event creationCanal(uint groupe, uint montant, uint delai, string pseudo,string description);

Gimicoin public myGimicoin;

mapping (uint => channel) public mappChannel;
mapping (uint => address[]) public mappGroupe;
mapping (uint => address[]) public mappGroupeAdmin;
mapping (string => address) private mappPseudo;

enum EtatCanal {ACTIF, FERME}

uint IDGroupe;
uint MAX_MEMBRE = 20;
uint MAX_DELAI = 50;
uint MAX_AMOUNT = 50;

struct channel
{
  address demandeur;
  uint montant;
  uint blocFermeture;
  EtatCanal etat;
  uint groupe;
}

constructor() public
{
myGimicoin = new Gimicoin();
}

function creerGroupe() public
{
  IDGroupe += 1;
  mappGroupe[IDGroupe].push(msg.sender);
  mappGroupeAdmin[IDGroupe].push(msg.sender);
}

function creerCanal(uint _groupe, uint _montant, uint _delai, string memory _pseudo, string memory _description) public
{
    require(mappPseudo[_pseudo]==msg.sender);
    for (uint i=0;i<mappGroupe[_groupe].length;i++){
      if (mappGroupe[_groupe][i] == msg.sender)
      {
        uint channelID = uint(keccak256(bytes(_pseudo)));
        mappChannel[channelID].montant=_montant;
        mappChannel[channelID].etat=EtatCanal.ACTIF;
        mappChannel[channelID].blocFermeture=block.number+_delai;
        mappChannel[channelID].groupe = _groupe;
        mappChannel[channelID].demandeur = msg.sender;
        emit creationCanal(_groupe,_montant,_delai,_pseudo,_description);
        break;
      }
  }
}

function payerCanal(uint _groupe, uint _channelID, string memory _pseudo) payable public
{
    require(mappPseudo[_pseudo]==msg.sender);
    for (uint i=0;i<mappGroupe[_groupe].length;i++){
      if (mappGroupe[_groupe][i] == msg.sender)
      {
      require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
      require(mappChannel[_channelID].groupe==_groupe);
      require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
      require(mappChannel[_channelID].blocFermeture>=block.number);
      myGimicoin.mint(msg.sender,msg.value);
      break;
      }
  }
}

function fermetureCanal(uint _channelID, uint _nonce, uint) public {
  require(mappChannel[_channelID].blocFermeture<=block.number);
  require(mappChannel[_channelID].etat==EtatCanal.ACTIF);
  mappChannel[_tokenID].etat=EtatCanal.FERME;
}

function creerPseudo(string memory _pseudo) public
{
require(mappPseudo[_pseudo]==address(0));
mappPseudo[_pseudo]=msg.sender;
}

function ajouterMembre(address _membre, uint _groupe) public
{
require(mappGroupe[_groupe].length<MAX_MEMBRE);
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
  for (uint i=0;i<mappGroupeAdmin[_groupe].length;i++){
      if (mappGroupeAdmin[_groupe][i] == msg.sender)
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
