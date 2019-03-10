pragma solidity ^0.5.1;

contract CanalDePaiement {

enum EtatCanal {VIDE, ACTIF, ENCOURSFERMETURE, FERME}

  address partieA;
  address partieB;
  uint montant;
  EtatCanal etat;
  uint blocFermeture;
  uint dernierNonce;
  uint equilibreA;
  uint equilibreB;
  bool readyA;
  bool readyB;


constructor(uint _montant, address _partieA, address _partieB) public {
  partieA = _partieA;
  partieB = _partieB;
  montant = _montant;
  etat = EtatCanal.VIDE;
  dernierNonce = 0;
 }

 function () payable external {
   require((etat == EtatCanal.VIDE));
   require((msg.sender == partieA && readyA == false) || (msg.sender == partieB && readyB == false));
   require((msg.value == montant));
   if (msg.sender == partieA) {
     readyA = true;
     equilibreA = montant;
   }
   if (msg.sender == partieB) {
     readyB = true;
     equilibreB = montant;
   }
   if (readyA == true && readyB == true) {
     etat = EtatCanal.ACTIF;
   }
 }

 function message(uint nonce, uint balanceA, uint balanceB) public pure returns (bytes32)
 {
   return keccak256(abi.encodePacked(nonce, balanceA, balanceB));
 }

}
