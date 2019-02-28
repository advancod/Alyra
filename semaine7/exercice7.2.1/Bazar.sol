pragma solidity ^0.5.1;

import "./ObjetsMagiques.sol";

contract Bazar is ObjetsMagiques{

address private objetsMagiquesAddresse;
ObjetsMagiques internal objetsMagiques;

mapping (uint256 => enchere) public _encheres;

struct enchere {
    address meilleurAcheteur;
    uint256 meilleureOffre;
    uint256 finEnchere;
    uint256 objet;
    address vendeur;
  }

constructor() public {
  objetsMagiques = new ObjetsMagiques("MAGICJEDITOKEN","MJT");
 }

function proposerALaVente(uint256 tokenId) public {
  require(objetsMagiques._exists(tokenId) == true);
  require(objetsMagiques.ownerOf(tokenId) == msg.sender);
  _encheres[tokenId].vendeur=objetsMagiques._tokenOwner(tokenId);
  _encheres[tokenId].objet=tokenId;
  _encheres[tokenId].finEnchere=block.number + 1000;
  uint currentRarete = objetsMagiques.getRarete(tokenId);
  if (currentRarete == 1)
  {
  _encheres[tokenId].meilleureOffre=10;
  }
  else if (currentRarete == 2)
  {
  _encheres[tokenId].meilleureOffre=100;
  }
  else
  {
  _encheres[tokenId].meilleureOffre=1000;
  }
}
}
