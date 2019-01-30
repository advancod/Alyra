//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.25;

contract Assemblee {

   struct proposition {
    address Author;
    string description;
    uint256 TimeCreation;
  }

  struct participation {
    address participant;
    string description;
    uint propal;
  }

  participation[] participations;
  address[] participants;
  proposition[] propositions;
  address public owner;
  string public nomAssemble;
  uint256 expirationProposition;


// mapp l'ID d'une proposition avec le nombre de votes
 mapping (uint => uint) public nbVote;
// mapp l'ID d'une proposition avec le verdict
 mapping (uint => bool) public validations;

  constructor(string memory nom) public {
    owner = msg.sender;
    nomAssemble = nom;
    expirationProposition = 604800;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  //l'administratuer peut désigner un autre administrateur
  function changerAdministrateur(address admin)  public onlyOwner {
     require(estParticipant(msg.sender) == true);
     owner = admin;
  }

//l'administratuer peut modifier le paramètre global de temps de vote d'une proposition
  function modifierExpirationVote(uint256 time)  public onlyOwner {
     expirationProposition = time;
  }

//Un membre ne peut pas voter deux fois pour une même proposition
   function alreadyVoted(uint numberPropal, address participant) public view returns (bool) {
   bool voted = false;
   for  (uint i=0; i<participations.length; i++){
       for  (uint j=0; j<participations.length; i++){
      require(participations[i].propal == numberPropal);
      require(participations[j].participant == participant);
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
      }else return false;
    }
  }

//donner la description d'une proposition
  function getProposition(uint propal) public view returns (string){
  return propositions[propal].description;
  }

//ajout une proposition à la liste
  function ajoutProposition(string memory description) public onlyOwner returns (uint){
  propositions.push(proposition(msg.sender,description,now));
  nbVote[propositions.length] = 0;
  validations[propositions.length] = false;
  return propositions.length;
  }

//On vote uniquement si accord, tout non vote est désaccord, possible uniquement si la date de fin de vote n est pas atteinte
  function actionVote(uint index) public {
    require(estParticipant(msg.sender) == true);
    require(validations[index] == false);
    require(alreadyVoted(index,msg.sender) == false);
    require(now - propositions[index].TimeCreation < expirationProposition);
          nbVote[index] = nbVote[index]+1;
          participations.push(participation(msg.sender,propositions[index].description,index));
  }


//retourne le nombre de votes
  function resultVote(uint index) public view returns (uint){
     return nbVote[index];
  }

// Gel le vote, valide la proposition si plus de 50% on voté pour.
    function validationVote(uint index) public onlyOwner{
      require(nbVote[index] > participants.length/2);
           validations[index] = true;
  }
}
