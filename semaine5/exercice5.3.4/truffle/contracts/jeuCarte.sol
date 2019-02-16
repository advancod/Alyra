pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
contract jeuCarte {
   string[] cartes;
   uint i;
   uint[] IDs;

   constructor() public {
    i = 0;
    }
   function ajouterCarte(string memory s) public {
       cartes.push(s);
       IDs[i]=i;
       i += 1;
   }

   function recupererCarte(uint ID) view public returns (string memory) {
       return cartes[ID];
   }

   function listCartes() public view returns (uint[] memory) {
       return IDs;
   }

}
