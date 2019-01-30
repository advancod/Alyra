//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.25;

contract Assemblee {

   struct proposition {
    address Author;
    string description;
  }

  struct participation {
    address participant;
    string description;
    uint propal;
  }

  bool[] validations;
  participation[] participations;
  address[] participants;
  proposition[] propositions;
  address public owner;
  string public nomAssemble;

  mapping (uint => uint) public nbVote;

  constructor(string memory nom) public {
    owner = msg.sender;
    nomAssemble = nom;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

   function alreadyVoted(uint numberPropal, address participant) public onlyOwner view returns (bool) {
   bool voted = false;
   for  (uint i=0; i<participations.length; i++){
       for  (uint j=0; j<participations.length; i++){
      if  (participations[i].propal == numberPropal && participations[j].participant == participant){
        voted = true;
      }
       }
    }
    return voted;
  }

  function isVoted(uint numberPropal) public onlyOwner view returns (bool) {
   bool voted = false;
   for  (uint i=0; i<validations.length; i++){
      if  (validations[numberPropal] == true || validations[numberPropal] == false){
        voted = true;
      }
    }
    return voted;
  }

  function rejoindre()  public {
    participants.push(msg.sender);
  }

  function estParticipant(address par) public view returns (bool) {
    for  (uint i=0; i<participants.length; i++){
      if  (participants[i]==par){
        return true;
      }
    }
    return false;
  }

  function ajoutProposition(string memory description) public onlyOwner returns (uint){
  propositions.push(proposition(msg.sender,description));
  nbVote[propositions.length] = 0;
  return propositions.length;
  }

  function actionVote(uint index, bool vote) public {
    require(alreadyVoted(index,msg.sender) == false);
    require(isVoted(index) == false);
    require(estParticipant(msg.sender) == true);
      vote = false;
         if  (vote==true){
          nbVote[index] = nbVote[index]+1;
          participations.push(participation(msg.sender,propositions[index].description,index));
         }
  }

  function dictature(uint nb, uint propal) public onlyOwner returns (uint){
     require(isVoted(propal) == false);
     return nbVote[propal] = nbVote[propal] - nb;
  }

  function resultVote(uint index) public view returns (uint){
     return nbVote[index];
  }

    function validationVote(uint index) public onlyOwner returns (bool){
      if  (nbVote[index] > participants.length/2){
           validations[index] = true;
          return true;
         }
     else {
     validations[index] = false;
     return false;
     }
  }
}
