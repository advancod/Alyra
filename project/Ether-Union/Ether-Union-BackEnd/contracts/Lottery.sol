pragma solidity ^0.5.0;

import "./Cagnottes.sol";

contract Lottery is Cagnottes{

mapping (address => uint) private prediction ;
mapping (uint => mapping (address => bool)) private win ;

enum LotteryState { Started, Finished, Pending }

// bloc d'arret du jeux
uint private blockStop;
// bloc de prediction
uint private blockEnd;
// bloc de fin de declaration de victoire
uint private blockSave;
// bloc de fin de recuperation de ses gains
uint private blockWithdraw;
// prix en token du jeux
uint private PRICE_LOTTERY_TOKEN;

LotteryState private state;

struct resultat
{
  uint blockFin;
  uint cagnotte;
  uint nbGagnants;
  uint numCagnotte;
}

resultat lastResult;

constructor() public
{
  state = LotteryState.Pending;
  blockStop = 1;
  blockWithdraw = 1;
  blockSave = 1;
  PRICE_LOTTERY_TOKEN = 1;
  // pour les tests
  _mint(msg.sender, 10);
}

function initLottery() public onlyOwner
{
  require(block.number > lastResult.blockFin + blockSave + blockWithdraw);
  require(state == LotteryState.Pending);
  lastResult.nbGagnants = 0;
  lastResult.numCagnotte += 1;
  blockEnd = block.number + blockStop;
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
  lastResult.blockFin = blockEnd;
  blockEnd = 0;
}

function closeGame() public onlyOwner
{
  require(state == LotteryState.Finished);
  require(block.number > lastResult.blockFin + blockSave);
  state = LotteryState.Pending;
}

function saveWin() public
{
  require(state == LotteryState.Finished);
  require(prediction[msg.sender] == lastResult.cagnotte);
  win[lastResult.numCagnotte][msg.sender] = true;
  lastResult.nbGagnants += 1;
  prediction[msg.sender] = 0;
}

function withdrawGains() public
{
  require(win[lastResult.numCagnotte][msg.sender] == true);
  require(state == LotteryState.Pending);
  require(prediction[msg.sender] == lastResult.cagnotte);
  win[lastResult.numCagnotte][msg.sender] == false;
  msg.sender.transfer(uint(lastResult.cagnotte.div(lastResult.nbGagnants)));
}

function getStateGame() public view returns (string memory)
{
  if(state == LotteryState.Pending){
    return "jeux ferme : recuperer vos gains";
  }
  else if(state == LotteryState.Finished){
    return "jeux termine : declarer vos gains";
  }
  else{
    return "jeux en cours";
  }
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
  if (win[lastResult.numCagnotte][msg.sender] == false)
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

function getWithdrawBlock() public view returns (uint)
{
  if (state == LotteryState.Pending)
  {
  return 0;
  }
  else return blockEnd + blockSave + blockWithdraw;
}

function getSaveBlock() public view returns (uint)
{
  if (state == LotteryState.Finished || state == LotteryState.Pending)
  {
  return 0;
  }
  return blockEnd + blockSave;
}

function modifierBlockSave(uint _save) public onlyOwner
{
  blockSave = _save;
}

function modifierBlockWithdraw(uint _withdraw) public onlyOwner
{
  blockWithdraw = _withdraw;
}

function modifierPriceTicket(uint _price) public onlyOwner
{
  PRICE_LOTTERY_TOKEN = _price;
}


}
