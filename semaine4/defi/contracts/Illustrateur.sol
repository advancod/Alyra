pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract Illustrateur is Ownable {

event bannishement(address addressBanished);

  mapping (address => bool) public addressesBannies;
  mapping (address => infoIllustrateur) public reputations;

  modifier enable() {
    require(addressesBannies[msg.sender] == false,"cet illustrateur est banni");
    _;
  }

  struct infoIllustrateur {
   string cryptopseudo;
   uint256 reputation;
   string services;
 }

 address[] listeAddressIllustrateurs;

  function inscription(string memory _cryptopseudo, string memory _services) public {
    reputations[msg.sender].cryptopseudo = _cryptopseudo;
    reputations[msg.sender].reputation = 1;
    reputations[msg.sender].services = _services;
    addressesBannies[msg.sender] = false;
    listeAddressIllustrateurs.push(msg.sender);
  }

  function bannissement(address _addresse) onlyOwner public {
   require(addressesBannies[_addresse] == false,"déja banni");
   addressesBannies[_addresse] == true;
   reputations[msg.sender].reputation = 0;
   emit bannishement(_addresse);
  }

   function getReputation(address _addresse) public view returns (reputation memory){
      return reputations[_addresse];
    }

    function getListeIllustrateurs() public view returns (address[] memory){
       return listeAddressIllustrateurs;
     }

  function produireHash(string memory _url) public pure returns (bytes32){
      return keccak256(abi.encode(_url));
  }

}
