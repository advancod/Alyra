pragma solidity ^0.5.1;

import "./gimicoin.sol";

contract CanalDePaiement is gimicoin  {

event creationCanal(uint groupe, uint montant, uint delai, string pseudo,string description);

gimicoin public myGimicoin;

mapping (uint => channel) public mappChannel;
mapping (uint => address[]) public mappGroupe;
mapping (uint => address[]) public mappGroupeAdmin;
mapping (string => address) private mappPseudo;
mapping (uint => uint) private mappToken;

enum EtatCanal {ACTIF, FERME}

uint IDGroupe;
uint MAX_MEMBRE = 20;
uint MAX_DELAI = 50;
uint MAX_AMOUNT = 50;

struct channel
{
  uint montant;
  uint blocFermeture;
  uint dernierNonce;
  EtatCanal etat;
}

struct statistiques
{
  address partie;
  stat[] don;
  stat[] dette;
}

struct stat
{
  address partie;
  uint montant;
}

struct groupe
{
  address[] membres;
}

uint[] public _tricoin;
channel[] public _channels;
groupe[] public groupes;

constructor() public
{
myGimicoin = new gimicoin();
}

function creerGroupe() public
{
  IDGroupe += 1;
  mappGroupe[IDGroupe].push(msg.sender);
  mappGroupeAdmin[IDGroupe].push(msg.sender);
}

function creerCanal(uint _groupe, uint _montant, uint _delai, string memory _pseudo, string memory Description) public
{
    require(mappPseudo[_pseudo]==msg.sender);
    for (uint i=0;i<mappGroupe[_groupe].length;i++){
      if (mappGroupe[_groupe][i] == msg.sender)
      {
        uint tokenID = uint(keccak256(bytes(_pseudo)));
        myGimicoin._mint(msg.sender,_montant);
        mappToken[tokenID]=_montant;
        mappChannel[tokenID].montant=_montant;
        mappChannel[tokenID].etat=EtatCanal.ACTIF;
        mappChannel[tokenID].blocFermeture=block.number+_delai;
        mappChannel[tokenID].dernierNonce += 1;
        emit creationCanal_groupe,_montant,_delai,_pseudo,_Description)
        break;
      }
  }
}

function fermetureCanal(uint _tokenID, uint _nonce, uint _toPay) public {
  require(mappChannel[_tokenID].etat==EtatCanal.ACTIF);
  require(mappChannel[_tokenID].dernierNonce < _nonce);
  myGimicoin._burn(msg.sender,mappToken);
  mappToken[_tokenID]-=_toPay;
  mappChannel[_tokenID].etat=EtatCanal.FERME;
}

function creerPseudo(string memory _pseudo) public
{
require(mappPseudo[_pseudo]==address(0));
mappPseudo[_pseudo]=msg.sender;
}

function ajouter_membre(address _membre, uint _groupe) public
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

}
