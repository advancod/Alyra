pragma solidity ^0.5.1;

contract ERC721 {

mapping (uint256 => address) public _tokenOwner;
mapping (uint256 => address) private _tokenApprovals;
mapping (address => uint256) private _ownedTokensCount;
mapping (address => uint256[]) private _ownedTokens;
mapping (uint256 => uint256) private _ownedTokensIndex;
mapping (uint256 => uint256) private _allTokensIndex;
mapping (uint256 => string) private _tokenURIs;

uint256[] private _allTokens;

event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);

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

 function _mint(address to, uint256 tokenId) internal {
   require(to != address(0));
   _addTokenTo(to, tokenId);
   emit Transfer(address(0), to, tokenId);
 }

 function _burn(address owner, uint256 tokenId) internal {
   _clearApproval(owner, tokenId);
   _removeTokenFrom(owner, tokenId);
   emit Transfer(owner, address(0), tokenId);
 }

 function tokenOfOwnerByIndex(address owner,uint256 index) public view returns (uint256){
   require(index < balanceOf(owner));
   return _ownedTokens[owner][index];
 }

 function totalSupply() public view returns (uint256) {
   return _allTokens.length;
 }

 function tokenByIndex(uint256 index) public view returns (uint256) {
   require(index < totalSupply());
   return _allTokens[index];
 }

 function tokenURI(uint256 tokenId) public view returns (string memory) {
   require(_exists(tokenId));
   return _tokenURIs[tokenId];
 }

 function _setTokenURI(uint256 tokenId, string memory uri) internal {
   require(_exists(tokenId));
   _tokenURIs[tokenId] = uri;
 }

}
