//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;

import "./Ownable.sol";

contract Illustrateur is Ownable {

event bannishement(address addressBanished);

  mapping (address => bool) public addressesBannies;
  mapping (address => reputation) public reputations;

  modifier enable() {
    require(addressesBannies[msg.sender] == false,"cet illustrateur est banni");
    _;
  }

  struct reputation {
   string nom;
   uint256 reputation;
 }

  function inscription(string memory _nom) public {
    reputations[msg.sender].nom = _nom;
    reputations[msg.sender].reputation = 1;
    addressesBannies[msg.sender] = false;
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
}
