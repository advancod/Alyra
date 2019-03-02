pragma solidity ^0.5.1;

import "./ERC721.sol";

contract ObjetsFactory is ERC721 {

mapping (uint256 => magicToken) private _tokenShape;
mapping (uint256 => string) public _mapRarete;
mapping (uint256 => string) private _mapObjet;

string public constant name = "MAGICJEDITOKEN";
string public constant symbol = "MJT";

 struct magicToken {
    uint rarete;
    uint objet;
    uint level;
    uint numero;
 }

ERC721 internal erc721;

constructor() public {
  erc721 = new ERC721();
 _mapRarete[1]="courant";
 _mapRarete[2]="rare";
 _mapRarete[3]="divin";
 _mapObjet[1]="epee";
 _mapObjet[2]="sabrelazer";
 _mapObjet[3]="pistolet";
 _mapObjet[4]="testocule";
 }

event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);


function utiliser(uint256 tokenId) public {
require(erc721._exists(tokenId) == true);
require(erc721.ownerOf(tokenId) == msg.sender);

}

}
