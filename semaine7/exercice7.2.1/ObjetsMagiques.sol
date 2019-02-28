pragma solidity ^0.5.1;

contract ObjetsMagiques {

mapping (uint256 => address) public _tokenOwner;
mapping (uint256 => address) private _tokenApprovals;
mapping (address => uint256) private _ownedTokensCount;
mapping (uint256 => magicToken) private _tokenShape;
mapping (uint256 => string) public _mapRarete;
mapping (uint256 => string) private _mapObjet;
mapping (uint256 => string) private _mapModel;
mapping(address => uint256[]) private _ownedTokens;
// Mapping from token ID to index of the owner tokens list
mapping(uint256 => uint256) private _ownedTokensIndex;
// Array with all token ids, used for enumeration
uint256[] private _allTokens;
// Mapping from token id to position in the allTokens array
mapping(uint256 => uint256) private _allTokensIndex;
// Optional mapping for token URIs
mapping(uint256 => string) private _tokenURIs;

string private _name;
string private _symbol;

 struct magicToken {
    uint rarete;
    uint objet;
    uint model;
    uint numero;
 }

constructor(string memory name, string memory symbol) public {
 _name = name;
 _symbol = symbol;
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
  _tokenShape[IDToken].rarete=_rarete;
  _tokenShape[IDToken].objet=_objet;
  _tokenShape[IDToken].model=_model;
  _addTokenTo(msg.sender,IDToken);
  return IDToken;
}

function getRarete(uint256 tokenId) public view returns (uint) {
return _tokenShape[tokenId].rarete;
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

 function _exists(uint256 tokenId) public view returns (bool) {
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

 /**
  * @dev Internal function to mint a new token
  * Reverts if the given token ID already exists
  * @param to The address that will own the minted token
  * @param tokenId uint256 ID of the token to be minted by the msg.sender
  */
 function _mint(address to, uint256 tokenId) internal {
   require(to != address(0));
   _addTokenTo(to, tokenId);
   emit Transfer(address(0), to, tokenId);
 }

 /**
  * @dev Internal function to burn a specific token
  * Reverts if the token does not exist
  * @param tokenId uint256 ID of the token being burned by the msg.sender
  */
 function _burn(address owner, uint256 tokenId) internal {
   _clearApproval(owner, tokenId);
   _removeTokenFrom(owner, tokenId);
   emit Transfer(owner, address(0), tokenId);
 }

 function tokenOfOwnerByIndex(address owner,uint256 index) public view returns (uint256){
   require(index < balanceOf(owner));
   return _ownedTokens[owner][index];
 }

 /**
  * @dev Gets the total amount of tokens stored by the contract
  * @return uint256 representing the total amount of tokens
  */
 function totalSupply() public view returns (uint256) {
   return _allTokens.length;
 }

 /**
  * @dev Gets the token ID at a given index of all the tokens in this contract
  * Reverts if the index is greater or equal to the total number of tokens
  * @param index uint256 representing the index to be accessed of the tokens list
  * @return uint256 token ID at the given index of the tokens list
  */
 function tokenByIndex(uint256 index) public view returns (uint256) {
   require(index < totalSupply());
   return _allTokens[index];
 }

 /**
  * @dev Gets the token name
  * @return string representing the token name
  */
 function name() external view returns (string memory) {
   return _name;
 }

 /**
  * @dev Gets the token symbol
  * @return string representing the token symbol
  */
 function symbol() external view returns (string memory) {
   return _symbol;
 }

 /**
  * @dev Returns an URI for a given token ID
  * Throws if the token ID does not exist. May return an empty string.
  * @param tokenId uint256 ID of the token to query
  */
 function tokenURI(uint256 tokenId) public view returns (string memory) {
   require(_exists(tokenId));
   return _tokenURIs[tokenId];
 }

 /**
  * @dev Internal function to set the token URI for a given token
  * Reverts if the token ID does not exist
  * @param tokenId uint256 ID of the token to set its URI
  * @param uri string URI to assign
  */
 function _setTokenURI(uint256 tokenId, string memory uri) internal {
   require(_exists(tokenId));
   _tokenURIs[tokenId] = uri;
 }

}
