pragma solidity ^0.5.4;
pragma experimental ABIEncoderV2;

import "./Ownable.sol";

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
      bool alreadyExists = false;
      for (uint i=0;i<listeAddressIllustrateurs.length;i++){
          if (listeAddressIllustrateurs[i] == msg.sender)
          {
             alreadyExists = true;
             break;
          }
      }
    require(alreadyExists == false,"déja inscrit");
    reputations[msg.sender].cryptopseudo = _cryptopseudo;
    reputations[msg.sender].reputation = 1;
    reputations[msg.sender].services = _services;
    addressesBannies[msg.sender] = false;
    listeAddressIllustrateurs.push(msg.sender);
  }

    function majServices(string memory _services) public {
      reputations[msg.sender].services = _services;
    }

  function bannissement(address _addresse) onlyOwner public {
   require(addressesBannies[_addresse] == false,"déja banni");
   addressesBannies[_addresse] == true;
   reputations[msg.sender].reputation = 0;
   emit bannishement(_addresse);
  }

   function getReputation(address _addresse) public view returns (infoIllustrateur memory){
      return reputations[_addresse];
    }

   function getListeIllustrateurs() public view returns (address[] memory){
       return listeAddressIllustrateurs;
     }

  function produireHash(string memory _url) public pure returns (bytes32){
      return keccak256(abi.encode(_url));
  }

}
