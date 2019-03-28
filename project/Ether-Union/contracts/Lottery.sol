pragma solidity ^0.5.0;

import "./Cagnottes.sol";

contract Lottery is Cagnottes{

mapping (address => uint[]) private prediction ;
mapping (address => uint) private gains ;

enum LotteryState { Started, Finished, Pending }

address[] private players;
address[] private winners;

uint private player;
uint private winner;
uint private blockInterval;
uint private blockStart;

uint public PRICE_LOTTERY_TOKEN;

LotteryState state;

constructor() public
{
  PRICE_LOTTERY_TOKEN = 1000000000;
  blockInterval = 1000000;
  state == LotteryState.Pending;
}

function initierLottery() public onlyOwner
{
  require(state == LotteryState.Pending);
  require(LOTTERY_CAGNOTTE > PRICE_LOTTERY_TOKEN);
  state = LotteryState.Started;
  blockStart = block.number;
}

function play(uint _prediction) public
{
  require(state == LotteryState.Started);
  _burnFrom(msg.sender,PRICE_LOTTERY_TOKEN);
  prediction[msg.sender].push(_prediction);
  players[player] = msg.sender;
  player += 1;
}

function endGame() public onlyOwner
{
  require(state == LotteryState.Started);
  require(block.number - blockStart > blockInterval);
  for (uint i=0; i< players.length; i++)
  {
    for (uint j=0; j< prediction[players[i]].length; j++)
    {
      if (prediction[players[i]][j] == LOTTERY_CAGNOTTE && prediction[players[i]][j] != 0)
      {
        prediction[players[i]][j] = 0;
        winners[winner] = players[i];
        winner += 1;
      }
      delete players[i];
    }
    player = 0;
  }
}

function soldeGame() public onlyOwner
{
  require(state == LotteryState.Finished);
  LOTTERY_CAGNOTTE = uint(LOTTERY_CAGNOTTE.div(winner));
  for (uint i=0; i< winners.length; i++)
  {
    gains[winners[i]].add(LOTTERY_CAGNOTTE);
    delete winners[i];
  }
  LOTTERY_CAGNOTTE = 0;
  state = LotteryState.Pending;
}

function withdrawGains() public
{
  msg.sender.transfer(gains[msg.sender]);
  gains[msg.sender] = 0;
}

function getPrixLottery() public view returns (uint)
{
  return PRICE_LOTTERY_TOKEN;
}

function modifierPrixLottery(uint _price) public onlyOwner
{
  PRICE_LOTTERY_TOKEN = _price;
}

function modifierBlockInterval(uint _interval) public onlyOwner
{
  blockInterval = _interval;
}

function getSuperCagnotte() public view returns (uint)
{
  return LOTTERY_CAGNOTTE;
}

}
