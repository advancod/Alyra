pragma solidity ^0.5.1;

import "./ObjetsFactory.sol";
import "./ZombieFactory.sol";
import "./KittyFactory.sol";
import "./Ownable.sol";

contract Game is ObjetsFactory, ZombieFactory, KittyFactory, Ownable{

uint levelUpFee = 0.001 ether;

ObjetsFactory internal objetsFactory;
ZombieFactory internal zombieFactory;
KittyFactory internal kittyFactory;

constructor() public {
  objetsFactory = new ObjetsFactory();
  zombieFactory = new ZombieFactory();
  kittyFactory = new KittyFactory();
 }

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

function proposerALaVente(uint256 tokenId, uint256 offreInitiale) public {
  require(kittyFactory._exists(tokenId) == true);
  require(kittyFactory.ownerOf(tokenId) == msg.sender);
  _encheres[tokenId].vendeur=kittyFactory._tokenOwner(tokenId);
  _encheres[tokenId].objet=tokenId;
  _encheres[tokenId].finEnchere=block.number + 1000;
  _encheres[tokenId].meilleurAcheteur = msg.sender;
  _encheres[tokenId].status = statusEnum.OUVERTE;
  _encheres[tokenId].meilleureOffre=offreInitiale;
}

function recupererObjet(uint256 tokenId) public {
 require(block.number > _encheres[tokenId].finEnchere);
 require(msg.sender == _encheres[tokenId].meilleurAcheteur);
 require(_encheres[tokenId].status == statusEnum.OUVERTE);
 kittyFactory.transferFrom(_encheres[tokenId].vendeur, _encheres[tokenId].meilleurAcheteur, tokenId);
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
