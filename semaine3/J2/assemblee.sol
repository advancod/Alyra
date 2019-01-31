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
  uint partsOrganizateurStock;
  uint minTipForSponsorship;
  uint maxSponsors;
  address[] sponsors;

// mapp l'ID d'une proposition avec le nombre de votes
 mapping (uint => uint) public nbVote;
// mapp l'ID d'une proposition avec le verdict
 mapping (uint => bool) public validations;
 // nombre de par de responsabilité par organisateur
 mapping (address => uint) public partsOrganizateur;

  constructor(string memory nom) public {
    owner = msg.sender;
    nomAssemble = nom;
    expirationProposition = 604800;
    partsOrganizateurStock = 100;
    partsOrganizateur[msg.sender] = partsOrganizateurStock;
    minTipForSponsorship = 30;
    maxSponsors = 50;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

//Vérifier si une addresse possède des parts de responsabilité
  function estOrga(address orga) public view returns (bool) {
      if  (partsOrganizateur[orga]>0){
        return true;
      }else return false;
  }

    //On peut attribuer ses parts de responsabilité
  function transfererOrga(address orga, uint parts) public {
     require(partsOrganizateurStock -  parts > 0);
     require(partsOrganizateur[msg.sender] >=  parts);
     partsOrganizateur[orga] += parts;
     sub(partsOrganizateurStock,parts);
  }

  //l'administrateur peut désigner un autre administrateur
  function changerAdministrateur(address admin) public onlyOwner {
     require(estParticipant(msg.sender) == true);
     owner = admin;
  }

//l'administratuer peut modifier le paramètre global de temps de vote d'une proposition
  function modifierExpirationVote(uint256 time) public onlyOwner {
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

 function sponsoriser() payable  public {
    require(msg.value >= minTipForSponsorship);
    require(sponsors.length < maxSponsors);
    sponsors[sponsors.length]=msg.sender;
  }

  function rejoindre()  public {
    participants.push(msg.sender);
    partsOrganizateur[msg.sender]=0;
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

  /**
  * @dev Multiplies two numbers, reverts on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (a == 0) {
      return 0;
    }

    uint256 c = a * b;
    require(c / a == b);

    return c;
  }

  /**
  * @dev Integer division of two numbers truncating the quotient, reverts on division by zero.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b > 0); // Solidity only automatically asserts when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold

    return c;
  }

  /**
  * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a);
    uint256 c = a - b;

    return c;
  }

  /**
  * @dev Adds two numbers, reverts on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a);

    return c;
  }

  /**
  * @dev Divides two numbers and returns the remainder (unsigned integer modulo),
  * reverts when dividing by zero.
  */
  function mod(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b != 0);
    return a % b;
  }
}
