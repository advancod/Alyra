//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.25;

contract Pulsation {

  uint public battement;
  string private initMessage;

  constructor(string memory message) public {
    battement = 0;
    initMessage = message;
  }

  function ajouterBattement() public returns (string){
      battement += 1;
         if  (battement % 10 == 0){
            return "Criii";
        }
      else return initMessage;
  }
}

contract Pendule is Pulsation("dong") {

  string[] public balancier;
  Pulsation internal tic;
  Pulsation internal tac;

constructor() public {
    tac = new Pulsation("tac");
    tic = new Pulsation("ic");
  }

   function mouvementsBalancier(uint k) public {
         for  (uint i=1; i<k; i+2){
            balancier[k] = tic.ajouterBattement();
            balancier[k+1] = tac.ajouterBattement();
        }
   }

  function inspection() public returns (uint) {
         for  (uint i=0; i<balancier.length; i++){
           if  (keccak256(balancier[i]) == keccak256("Criii")){
            return i;
        }
        }
        return 0;
   }
}
