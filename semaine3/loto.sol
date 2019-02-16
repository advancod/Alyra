//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.4.25;

contract Loto {

   struct ticketStruct {
    uint8 NumberChoiced;
    address playerAddress;
    uint256 date
  }

  uint256 ticketPrice;
  uint256 day1stGameStarted;
  uint256 timeToLiveGame;
  ticketStruct[] tickets;
  address owner;
  address[] win;
  uint256 totalCagnote;
  uint256 gains;

  constructor() public {
    owner = msg.sender;
    ticketPrice = .001 ether;
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

  //acheter ticket aléatoire
  function buyTicketRandom(uint256 choiceDate) public payable notOwner {
    require(msg.value == ticketPrice);
    tickets[tickets.length-1].NumberChoiced = chooseRandomNumber();
    tickets[tickets.length-1].playerAddress = msg.sender;
    tickets[tickets.length-1].date = choiceDate;
    totalCagnote += ticketPrice;
  }

   //acheter ticket choisi
  function buyTicket(uint8 number, uint256 choiceDate) public payable notOwner {
    require(msg.value == ticketPrice);
    tickets[tickets.length-1].NumberChoiced = number;
    tickets[tickets.length-1].playerAddress = msg.sender;
    tickets[tickets.length-1].date = choiceDate;
    totalCagnote += ticketPrice;
  }

  //choisir nombre aléatoire
  function chooseRandomNumber() public view returns (uint8) {
      return uint8(uint256(keccak256(block.timestamp, block.difficulty))%251);
  }

  //retirer les gains
  function sendCash() onlyOwner public {
      resultGame();
      gains = totalCagnote/win.length;
      for  (uint i=0; i<win.length; i++){
        win[i].transfer(gains);
        totalCagnote -= gains;
    }
  }

  //resultat jeu
  function resultGame() private {
    uint number = chooseRandomNumber();
    for  (uint i=0; i<win.length; i++){
     delete win[i];
    }
    for  (uint j=0; j<tickets.length; j++){
      if  (tickets[j].NumberChoiced==number && tickets[j].date < now){
        win[j] = tickets[j].playerAddress ;
        delete tickets[j];
      }else delete tickets[j];
    }
  }
}
