/Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.5.3;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract JetonMinimal {

 using SafeMath for uint256;
 event Transfert(uint256 montant, address payeur, address destinataire);

 address public owner;

 mapping (address => uint256) public comptes;

 constructor(uint minimal) public {
   owner = msg.sender;
   comptes[owner] = minimal;

 }

 modifier onlyOwner() {
   require(msg.sender == owner);
   _;
 }

 function transfert(address destinataire, uint256 valeur) public {
   require(comptes[msg.sender] < valeur);
   require(comptes[destinataire] + valeur < comptes[destinataire]);
   comptes[msg.sender] = comptes[msg.sender].sub(valeur);
   comptes[destinataire] = comptes[destinataire].add(valeur);
   emit Transfert(valeur, msg.sender, destinataire);
}

function emettre(address receveur, uint montant) onlyOwner public {
   require(msg.sender == owner);
   comptes[receveur] = comptes[receveur].add(montant);
 }


}
