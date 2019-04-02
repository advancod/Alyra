pragma solidity ^0.5.0;

import "./Cagnottes.sol";

contract Lottery is Cagnottes{

mapping (address => uint[]) private prediction ;
mapping (address => uint) private gains ;

enum LotteryState { Started, Finished, Pending }

address[] private players;
address[] private winners;

uint private blockInterval;
uint private blockStart;

uint public PRICE_LOTTERY_TOKEN;
uint public MAX_PLAY;

LotteryState state;

constructor() public
{
  PRICE_LOTTERY_TOKEN = 100000000;
  blockInterval = 1000000;
  state == LotteryState.Pending;
  MAX_PLAY = 10;
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
  require(prediction[msg.sender].length < MAX_PLAY);
  _burnFrom(msg.sender,PRICE_LOTTERY_TOKEN);
  prediction[msg.sender].push(_prediction);
  players.push(msg.sender);
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
        winners.push(players[i]);
      }
      delete players[i];
    }
  }
}

function soldeGame() public onlyOwner
{
  require(state == LotteryState.Finished);
  if (winners.length>0)
  LOTTERY_CAGNOTTE = uint(LOTTERY_CAGNOTTE.div(winners.length));
  {
    for (uint i=0; i< winners.length; i++)
    {
      gains[winners[i]].add(LOTTERY_CAGNOTTE);
      delete winners[i];
    }
  LOTTERY_CAGNOTTE = 0;
  }
  state = LotteryState.Pending;
}

function withdrawGains() public
{
  uint MyGains = gains[msg.sender];
  gains[msg.sender] = 0;
  msg.sender.transfer(MyGains);
}

function getPrixLottery() public view returns (uint)
{
  return PRICE_LOTTERY_TOKEN;
}

function modifierPrixLottery(uint _price) public onlyOwner
{
  PRICE_LOTTERY_TOKEN = _price;
}

function modifierMaxPlay(uint _maxPlay) public onlyOwner
{
  MAX_PLAY = _maxPlay;
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
