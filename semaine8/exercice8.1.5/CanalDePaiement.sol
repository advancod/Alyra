pragma solidity ^0.5.1;

contract CanalDePaiement {

enum EtatCanal {VIDE, ACTIF, ENCOURSFERMETURE, FERME}

event eventFermeture(bytes32 message);
event eventContesterFermeture(bytes32 message);
event eventValiderFermeture(bytes32 message);

  address partieA;
  address partieB;
  address closer;
  uint montant;
  EtatCanal etat;
  uint blocFermeture;
  uint blocFermetureDelai;
  uint retraiDelai;
  uint equilibreA;
  uint equilibreB;
  uint dernierNonce;
  bool readyA;
  bool readyB;

constructor(uint _montant, address _partieA, address _partieB) public {
  partieA = _partieA;
  partieB = _partieB;
  montant = _montant;
  etat = EtatCanal.VIDE;
  blocFermetureDelai = 10;
  retraiDelai = 24;
 }

 modifier party() {
   require(msg.sender == partieA || msg.sender == partieB);
   _;
 }

 function () payable external {
   require((etat == EtatCanal.VIDE));
   require((msg.sender == partieA && readyA == false) || (msg.sender == partieB && readyB == false));
   require((msg.value == montant));
   if (msg.sender == partieA) {
     readyA = true;
   }
   if (msg.sender == partieB) {
     readyB = true;
   }
   if (readyA == true && readyB == true) {
     etat = EtatCanal.ACTIF;
   }
 }

 function message(uint nonce, uint balanceA, uint balanceB) public pure returns (bytes32){
   return keccak256(abi.encodePacked(nonce, balanceA, balanceB));
 }

 function recover(bytes32 hash, bytes memory signature)
   internal
   pure
   returns (address)
 {
   bytes32 r;
   bytes32 s;
   uint8 v;

   // Check the signature length
   if (signature.length != 65) {
     return (address(0));
   }

   // Divide the signature in r, s and v variables
   // ecrecover takes the signature parameters, and the only way to get them
   // currently is to use assembly.
   // solium-disable-next-line security/no-inline-assembly
   assembly {
     r := mload(add(signature, 0x20))
     s := mload(add(signature, 0x40))
     v := byte(0, mload(add(signature, 0x60)))
   }

   // Version of signature should be 27 or 28, but 0 and 1 are also possible versions
   if (v < 27) {
     v += 27;
   }

   // If the version is correct return the signer address
   if (v != 27 && v != 28) {
     return (address(0));
   } else {
     // solium-disable-next-line arg-overflow
     return ecrecover(hash, v, r, s);
   }
 }

 /**
  * toEthSignedMessageHash
  * @dev prefix a bytes32 value with "\x19Ethereum Signed Message:"
  * and hash the result
  */
 function toEthSignedMessageHash(bytes32 hash)
   internal
   pure
   returns (bytes32)
 {
   // 32 is the length in bytes of hash,
   // enforced by the type signature above
   return keccak256(
     abi.encodePacked("\x19Ethereum Signed Message:\n32", hash)
   );
 }

 function demandeFermeture(uint _nonce, uint _balanceA, uint _balanceB) public party {
   require(etat == EtatCanal.ACTIF);
   require(_balanceA + _balanceB == 2 * montant);
   closer = msg.sender;
   bytes32 equilibre = toEthSignedMessageHash(message(_nonce,_balanceA,_balanceB));
   dernierNonce = _nonce;
   blocFermeture = block.number + blocFermetureDelai;
   equilibreA = _balanceA;
   equilibreB = _balanceB;
   etat = EtatCanal.ENCOURSFERMETURE;
   emit eventFermeture(equilibre);
 }

 function validerFermeture(bytes32 hash, bytes memory _signature) public party {
   require(etat == EtatCanal.ENCOURSFERMETURE);
   require(msg.sender != closer);
   if (recover(hash, _signature) != address(0)) {
     etat = EtatCanal.FERME;
     emit eventValiderFermeture(hash);
   }
 }

 function contesterFermeture(uint _nonce, uint _balanceA, uint _balanceB) public party {
   require(etat == EtatCanal.ENCOURSFERMETURE);
   require(msg.sender != closer);
   require(block.number < blocFermeture);
   require(_balanceA + _balanceB == 2 * montant);
   require(_nonce < dernierNonce);
   bytes32 equilibre = toEthSignedMessageHash(message(_nonce,_balanceA,_balanceB));
   etat = EtatCanal.ACTIF;
   emit eventContesterFermeture(equilibre);
 }

 function retirerFonds() public party {
   require(etat == EtatCanal.FERME);
   require(block.number > blocFermeture + retraiDelai);
   if (msg.sender == partieA) {
     msg.sender.transfer(equilibreA);
     equilibreA = 0;
   }
   if (msg.sender == partieB) {
     msg.sender.transfer(equilibreB);
     equilibreB = 0;
   }
 }

}
