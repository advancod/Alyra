//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.25;

contract Loto {

   struct ticketStruct {
    uint8 NumberChoiced;
    uint256 TimeCreation;
    address playerAddress;
  }

  uint256 ticketPrice;
  uint256 endOfAGame;
  uint256 day1stGameStarted;
  uint256 timeToLiveGame;
  ticketStruct[] tickets;
  address owner;
  address[] win;
  uint256 totalCagnote;

  constructor() public {
    owner = msg.sender;
    ticketPrice = 100 finney;
    timeToLiveGame = 5 days;
    day1stGameStarted = now;
    totalCagnote = 0;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  modifier notOwner() {
    require(msg.sender != owner);
    _;
  }

  //acheter ticket
  function buyTicket() public notOwner {
    tickets[tickets.length-1].NumberChoiced = chooseRandomNumber();
    tickets[tickets.length-1].TimeCreation = now;
    tickets[tickets.length-1].playerAddress = msg.sender;
  }

  //choisir nombre aléatoire
  function chooseRandomNumber() public view returns (uint8) {
      return uint8(uint256(keccak256(block.timestamp, block.difficulty))%251);
  }

  //jouer automatiquement tous les jeux
  function buyRandomTicketPeriodicaly() public {

  }

  //finir jeu tous les 5 jours
  function closeGame() public {

  }

  //retirer ces gains
  function sendCash() public {

  }

  //resultat jeu
  function resultGame() onlyOwner public {
    uint number = chooseRandomNumber();
    for  (uint i=0; i<win.length; i++){
     delete win[i];
    }
    for  (uint j=0; j<tickets.length; j++){
      if  (tickets[j].NumberChoiced==number){
        win[j] = tickets[j].playerAddress ;
      }else delete tickets[j];
    }
  }
}
