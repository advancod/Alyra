pragma solidity ^0.5.1;

import "./ObjetsMagiques.sol";

contract Bazar is ObjetsMagiques{

address private objetsMagiquesAddresse;
ObjetsMagiques internal objetsMagiques;

mapping (uint256 => enchere) public _encheres;

enum statusEnum {OUVERTE,FERMEE}

struct enchere {
    address meilleurAcheteur;
    uint256 meilleureOffre;
    uint256 finEnchere;
    uint256 objet;
    address vendeur;
    statusEnum status;
  }

  struct rembourse {
    address acheteur;
    uint256 offre;
    uint256 objet;

  }

  rembourse[] rembourses;

constructor() public {
  objetsMagiques = new ObjetsMagiques("MAGICJEDITOKEN","MJT");
 }

function proposerALaVente(uint256 tokenId) public {
  require(objetsMagiques._exists(tokenId) == true);
  require(objetsMagiques.ownerOf(tokenId) == msg.sender);
  _encheres[tokenId].vendeur=objetsMagiques._tokenOwner(tokenId);
  _encheres[tokenId].objet=tokenId;
  _encheres[tokenId].finEnchere=block.number + 1000;
  _encheres[tokenId].meilleurAcheteur = msg.sender;
  _encheres[tokenId].status = statusEnum.OUVERTE;
  uint currentRarete = objetsMagiques.getRarete(tokenId);
  if (currentRarete == 1)
  {
  _encheres[tokenId].meilleureOffre=1;
  }
  else if (currentRarete == 2)
  {
  _encheres[tokenId].meilleureOffre=10;
  }
  else
  {
  _encheres[tokenId].meilleureOffre=100;
  }
}

function recupererObjet(uint256 tokenId) public {
 require(block.number > _encheres[tokenId].finEnchere);
 require(msg.sender == _encheres[tokenId].meilleurAcheteur);
 require(_encheres[tokenId].status == statusEnum.OUVERTE);
 objetsMagiques.transferFrom(_encheres[tokenId].vendeur, _encheres[tokenId].meilleurAcheteur, tokenId);
 for (uint i=0;i<rembourses.length;i++){
          if (rembourses[i].acheteur == msg.sender && rembourses[i].objet == tokenId)
          {
             rembourses[i].acheteur = _encheres[tokenId].vendeur; //Le vendeur pourra reclammer le remboursement à la place de l acheteur
             _encheres[tokenId].status = statusEnum.FERMEE;
             break;
          }
      }
}

function offre(uint256 tokenId) payable public {
  require(block.number < _encheres[tokenId].finEnchere);
  require(msg.value > _encheres[tokenId].meilleureOffre);
  _encheres[tokenId].meilleureOffre = msg.value;
  _encheres[tokenId].meilleurAcheteur = msg.sender;
  rembourses.push(rembourse(msg.sender,msg.value,tokenId));
}

function remboursement(uint256 tokenId) public {
    require(block.number > _encheres[tokenId].finEnchere);
    require(msg.sender != _encheres[tokenId].meilleurAcheteur);
      for (uint i=0;i<rembourses.length;i++){
          if (rembourses[i].acheteur == msg.sender)
          {
             msg.sender.transfer(rembourses[i].offre);
             delete rembourses[i];
             break;
          }
      }
}

}
