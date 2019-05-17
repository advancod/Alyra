pragma solidity ^0.5.0;

import "./Cagnottes.sol";

contract Lottery is Cagnottes{

mapping (address => uint) private prediction ;
mapping (address => bool) private win ;

enum LotteryState { Started, Finished, Pending }

uint private blockStop;
uint private blockEnd;
uint private PRICE_LOTTERY_TOKEN;

LotteryState private state;

struct resultat
{
  uint cagnotte;
  uint nbGagnants;
}

resultat lastResult;

constructor() public
{
  state = LotteryState.Pending;
  blockStop = 1;
  _mint(msg.sender, 10000);
}

function initierLottery(uint _price, uint _blockEnd) public onlyOwner
{
  require(block.number < blockEnd - blockStop);
  require(state == LotteryState.Pending);
  lastResult.nbGagnants = 0;
  blockEnd = _blockEnd;
  PRICE_LOTTERY_TOKEN = _price;
  state = LotteryState.Started;
}

function play(uint _prediction) public
{
 require(prediction[msg.sender] == 0);
 require(block.number <= blockEnd - blockStop);
 require(state == LotteryState.Started);
 require(balanceOf(msg.sender) >= PRICE_LOTTERY_TOKEN);
  _burn(msg.sender,PRICE_LOTTERY_TOKEN);
  prediction[msg.sender] = _prediction;
}

function endGame() public onlyOwner
{
  require(state == LotteryState.Started);
  require(block.number >= blockEnd);
  lastResult.cagnotte = LOTTERY_CAGNOTTE;
  state = LotteryState.Finished;
  LOTTERY_CAGNOTTE = 0;
  blockEnd = 0;
}

function closeGame() public onlyOwner
{
  require(state == LotteryState.Finished);
  state = LotteryState.Pending;
}

function saveWin() public
{
  require(state == LotteryState.Finished);
  require(prediction[msg.sender] == lastResult.cagnotte);
  win[msg.sender] = true;
  lastResult.nbGagnants += 1;
  prediction[msg.sender] = 0;
}

function withdrawGains() public
{
  require(win[msg.sender] == true);
  require(state == LotteryState.Pending);
  require(prediction[msg.sender] == lastResult.cagnotte);
  win[msg.sender] == false;
  msg.sender.transfer(uint(lastResult.cagnotte.div(lastResult.nbGagnants)));
}

function getPrixLottery() public view returns (uint)
{
  return PRICE_LOTTERY_TOKEN;
}

function getEndGame() public view returns (uint)
{
  return blockEnd;
}

function getSuperCagnotte() public view returns (uint)
{
  return LOTTERY_CAGNOTTE;
}

function getPrediction() public view returns (uint)
{
  return prediction[msg.sender];
}

function getBlockStop() public view returns (uint)
{
  if (blockEnd < blockStop)
  {
  return 0;
  }
  else return blockEnd - blockStop;

}

function modifierBlockStop(uint _stop) public onlyOwner
{
  blockStop = _stop;
}

function getCagnotte() public view returns (uint)
{
  return lastResult.cagnotte;
}

function getBlock() public view returns (uint)
{
  return block.number;
}

function getGains() public view returns (uint)
{
    if (win[msg.sender] == false)
  {
  return 0;
  }
  else return uint(lastResult.cagnotte.div(lastResult.nbGagnants));

}

function getSolde() public view returns (uint)
{
  return balanceOf(msg.sender);
}

function getNbGagnants() public view returns (uint)
{
  return lastResult.nbGagnants;
}

}
