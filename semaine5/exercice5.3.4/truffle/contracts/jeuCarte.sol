pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
contract Cartes {
   string[] cartes;

   function ajouterCarte(string memory s) public {
       cartes.push(s);
   }

   function recuperer(uint ind) view public returns (string memory) {
       return cartes[ind];
   }

   function toutRecuperer() public view returns (string[] memory) {
       return cartes;
   }
}
