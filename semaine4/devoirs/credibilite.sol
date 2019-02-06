//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.5.3;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract credibilite {

  using SafeMath for uint256;

  mapping (address => uint256) public cred;
  bytes32[] ordre;
  uint remise;

 constructor() public {
   remise = 1;

 }

  function produireHash(string memory _url) public pure returns (bytes32){
    return keccak256(abi.encode(_url));
  }

function transfert(address _destinataire, uint256 _valeur) public {
   require(cred[msg.sender] < _valeur - 1);
   require(cred[_destinataire] > 0);
   require(cred[_destinataire] + _valeur < cred[_destinataire]);
   cred[msg.sender] = cred[msg.sender].sub(_valeur);
   cred[_destinataire] = cred[_destinataire].add(_valeur);
}

function emettre(bytes32 _hash) public returns (uint) {
   ordre[remise] = _hash;
   if (remise == 1){
   cred[msg.sender] = 30;
   }
   else cred[msg.sender] = 0;
   remise += 1;
   return remise - 1;
  }
}
