pragma solidity ^0.5.1;

import "./TRICOIN.sol";

contract CanalDePaiement is TRICOIN  {

event eventChangementEtat(uint channel, bytes32 messag, string etat, address partie);

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
  uint montant;
  uint blocFermeture;
  uint dernierNonce;
  EtatCanal etat;
}

struct equilibre
{
  address partie;
  uint equilibre;
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

function creerGroupe() public
{
  IDGroupe += 1;
  mappGroupe[IDGroupe].push(msg.sender);
  mappGroupeAdmin[IDGroupe].push(msg.sender);
}

function creerCanal(uint _groupe, uint _montant, uint _delai, string memory _pseudo) public
{
    require(mappPseudo[_pseudo]==msg.sender);
    for (uint i=0;i<mappGroupe[_groupe].length;i++){
      if (mappGroupe[_groupe][i] == msg.sender)
      {
        uint tokenID = uint(keccak256(bytes(_pseudo)));
        _mint(msg.sender,tokenID);
        mappChannel[tokenID].montant=_montant;
        mappChannel[tokenID].etat=EtatCanal.ACTIF;
        mappChannel[tokenID].blocFermeture=block.number+_delai;
        mappChannel[tokenID].dernierNonce += 1;
        break;
      }
  }
}

function paiementSolo(uint _montant) public
{

}

function creerPseudo(string memory _pseudo) public
{
require(mappPseudo[_pseudo]==address(0));
mappPseudo[_pseudo]=msg.sender;
}

function demanderAdhesion(string memory _pseudo, uint _groupe) public
{
require(mappPseudo[_pseudo]==msg.sender);
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

function ajouter_admin(address _membre, uint _groupe) public
{
    for (uint i=0;i<mappGroupeAdmin[_groupe].length;i++){
      if (mappGroupeAdmin[_groupe][i] == msg.sender)
      {
         for (uint j=0;j<mappGroupe[_groupe].length;i++){
            if (mappGroupe[_groupe][j] == msg.sender)
            {
                  mappGroupeAdmin[IDGroupe].push(_membre);
                  break;
            }
          }
      }
  }
}

function supprimerMembre(string memory _pseudo, uint _groupe) public
{
require(mappPseudo[_pseudo]==msg.sender);
}

function quitterGroupe(string memory _pseudo, uint _groupe) public
{
require(mappPseudo[_pseudo]==msg.sender);
}

function recover(bytes32 hash, bytes memory signature) private pure returns (address){
  bytes32 r;
  bytes32 s;
  uint8 v;
  if (signature.length != 65) {
    return (address(0));
  }
  assembly {
    r := mload(add(signature, 0x20))
    s := mload(add(signature, 0x40))
    v := byte(0, mload(add(signature, 0x60)))
  }
  if (v < 27) {
    v += 27;
  }
  if (v != 27 && v != 28) {
    return (address(0));
  } else {
    return ecrecover(hash, v, r, s);
  }
}

function toEthSignedMessageHash(bytes32 hash) private pure returns (bytes32){
  return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));
}

}
