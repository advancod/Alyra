pragma solidity ^0.5.1;

contract ObjetsMagiques {

mapping (uint256 => address) private _tokenOwner;
mapping (uint256 => address) private _tokenApprovals;
mapping (address => uint256) private _ownedTokensCount;
mapping (uint256 => magicToken) public _tokenShape;
mapping (uint256 => string) private _mapRarete;
mapping (uint256 => string) private _mapObjet;
mapping (uint256 => string) private _mapModel;

string public name;
string public symbol;

  struct magicToken {
    string rarete;
    string objet;
    string model;
    uint numero;
 }

string[] listeRarete;

constructor() public {
 name = 'MAGICTOKENJEDI';
 symbol = 'MTJ';
 _mapRarete[1]="courant";
 _mapRarete[2]="rare";
 _mapRarete[3]="divin";
 _mapObjet[0]="epee";
 _mapObjet[1]="sabrelazer";
 _mapObjet[2]="pistolet";
 _mapModel[0]="petit";
 _mapModel[1]="gros";
 _mapModel[2]="baleze";
 }

event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);

function createToken(uint256 _rarete, uint256 _objet, uint256 _model) public returns (uint){
 uint IDToken = _model+(10*_objet)+(100*_rarete);
 require(_exists(IDToken) == false);
  _tokenShape[IDToken].rarete=_mapRarete[_rarete];
  _tokenShape[IDToken].objet=_mapObjet[_objet];
  _tokenShape[IDToken].model=_mapModel[_model];
  _addTokenTo(msg.sender,IDToken);
  return IDToken;
}

function creuser() public payable returns (uint256) {
require(msg.value==0.1 ether);
return createToken(uint(blockhash(block.number-1)) % 3 + 1, uint(blockhash(block.number-2)) % 3, uint(blockhash(block.number-3)) % 3);
}

function utiliser(uint256 tokenId) public {
require(_exists(tokenId) == true);
require(ownerOf(tokenId) == msg.sender);
uint action = uint(blockhash(block.number-1)) % 11;
if (action == 0)
{
  _removeTokenFrom(msg.sender,tokenId);
  }
}

 function balanceOf(address owner) public view returns (uint256) {
   require(owner != address(0));
   return _ownedTokensCount[owner];
 }

 function ownerOf(uint256 tokenId) public view returns (address) {
   address owner = _tokenOwner[tokenId];
   require(owner != address(0));
   return owner;
 }

 function _exists(uint256 tokenId) internal view returns (bool) {
   address owner = _tokenOwner[tokenId];
   return owner != address(0);
 }

 function transferFrom(address from, address to, uint256 tokenId) public {
   require(from==ownerOf(tokenId));
   require(to != address(0));
   _clearApproval(from, tokenId);
   _removeTokenFrom(from, tokenId);
   _addTokenTo(to, tokenId);
   emit Transfer(from, to, tokenId);
 }

 function _clearApproval(address owner, uint256 tokenId) internal {
   require(ownerOf(tokenId) == owner);
   if (_tokenApprovals[tokenId] != address(0)) {
     _tokenApprovals[tokenId] = address(0);
   }
 }

 function _removeTokenFrom(address from, uint256 tokenId) internal {
   require(ownerOf(tokenId) == from);
   _ownedTokensCount[from] = _ownedTokensCount[from] - 1;
   _tokenOwner[tokenId] = address(0);
 }

 function _addTokenTo(address to, uint256 tokenId) internal {
   require(_tokenOwner[tokenId] == address(0));
   _tokenOwner[tokenId] = to;
   _ownedTokensCount[to] = _ownedTokensCount[to] + 1;
 }

}
