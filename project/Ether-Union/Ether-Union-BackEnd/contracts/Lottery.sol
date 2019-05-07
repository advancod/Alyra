pragma solidity ^0.5.0;

import "./Cagnottes.sol";

contract Lottery is Cagnottes{

mapping (address => uint[]) private prediction ;
mapping (address => uint) private gains;

enum LotteryState { Started, Finished, Pending }

address[] private players;
address[] private winners;

uint private blockStop;
uint private blockEnd;
uint private PRICE_LOTTERY_TOKEN;
uint private NB_TICKETS;

LotteryState private state;

struct resultat
{
  uint numCagnotte;
  uint cagnotte;
  uint nbGagnants;
}

resultat lastResult;

constructor() public
{
  state = LotteryState.Pending;
  blockStop = 100;
}

function initierLottery(uint _price, uint _tickets, uint _blockEnd) public onlyOwner
{
  require(block.number < blockEnd - blockStop);
  require(state == LotteryState.Pending);
  require(block.number < _blockEnd);
  blockEnd = _blockEnd;
  NB_TICKETS = _tickets;
  PRICE_LOTTERY_TOKEN = _price;
  state = LotteryState.Started;
}

function play(uint _prediction, uint _nbTickets) public
{
  require(block.number < blockEnd - blockStop);
  require(state == LotteryState.Started);
  require(NB_TICKETS - _nbTickets > 0);
  require(balanceOf(msg.sender) >= _nbTickets.mul(PRICE_LOTTERY_TOKEN));
  NB_TICKETS -= _nbTickets;
  _burnFrom(msg.sender,_nbTickets.mul(PRICE_LOTTERY_TOKEN));
  for (uint i=0; i< _nbTickets; i++)
  {
  prediction[msg.sender].push(_prediction);
  }
  players.push(msg.sender);
}

function endGame() public onlyOwner
{
  require(state == LotteryState.Started);
  require(block.number > blockEnd);
  for (uint i=0; i< players.length; i++)
  {
    for (uint j=0; j< prediction[players[i]].length; j++)
    {
      if (prediction[players[i]][j] == LOTTERY_CAGNOTTE && prediction[players[i]][j] != 0)
      {
        winners.push(players[i]);
      }
    }
    delete players[i];
  }
  msg.sender.transfer(LOTTERY_CAGNOTTE);
  lastResult.numCagnotte += 1;
  lastResult.cagnotte = LOTTERY_CAGNOTTE;
  lastResult.nbGagnants = winners.length;
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

function getTicketsLeft() public view returns (uint)
{
  return NB_TICKETS;
}

function getEndGame() public view returns (uint)
{
  return blockEnd;
}

function getSuperCagnotte() public view returns (uint)
{
  return LOTTERY_CAGNOTTE;
}

function getBlockStop() public view returns (uint)
{
  if (state == LotteryState.Pending)
  {
  return 0;
  }
  else return blockEnd - blockStop;

}

function modifierBlockStop(uint _stop) external onlyOwner
{
  blockStop = _stop;
}

function getNumCagnotte() external view returns (uint)
{
  return lastResult.numCagnotte;
}

function getCagnotte() external view returns (uint)
{
  return lastResult.cagnotte;
}

function getBlock() external view returns (uint)
{
  return block.number;
}

function getGains() external view returns (uint)
{
  return gains[msg.sender];
}

function getSolde() external view returns (uint)
{
  return balanceOf(msg.sender);
}

function getNbGagnants() external view returns (uint)
{
  return lastResult.nbGagnants;
}

}
