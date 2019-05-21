pragma solidity ^0.5.0;

import "./Cagnotes.sol";

contract Lotery is Cagnotes{

mapping (address => uint) private prediction ;
mapping (uint => mapping (address => bool)) private win ;

enum LoteryState { Started, Finished, Pending }

// bloc d'arret du jeux
uint private blockStop;
// bloc de prediction
uint private blockEnd;
// bloc de fin de declaration de victoire
uint private blockSave;
// bloc de fin de recuperation de ses gains
uint private blockWithdraw;
// prix en token du jeux
uint private PRICE_LOTERY_TOKEN;

LoteryState private state;

struct resultat
{
  uint blockFin;
  uint cagnote;
  uint nbGagnants;
  uint numCagnote;
}

resultat lastResult;

constructor() public
{
  state = LoteryState.Pending;
  blockStop = 1;
  blockWithdraw = 1;
  blockSave = 1;
  PRICE_LOTERY_TOKEN = 1;
  // pour les tests
  _mint(msg.sender, 10);
}

function initLotery() public onlyOwner
{
  require(block.number > lastResult.blockFin + blockSave + blockWithdraw);
  require(state == LoteryState.Pending);
  lastResult.nbGagnants = 0;
  lastResult.numCagnote += 1;
  blockEnd = block.number + blockStop;
  state = LoteryState.Started;
}

function play(uint _prediction) public
{
 require(prediction[msg.sender] == 0);
 require(block.number <= blockEnd - blockStop);
 require(state == LoteryState.Started);
  _burn(msg.sender,PRICE_LOTERY_TOKEN);
  prediction[msg.sender] = _prediction;
}

function endGame() public onlyOwner
{
  require(state == LoteryState.Started);
  require(block.number >= blockEnd);
  lastResult.cagnote = LOTERY_CAGNOTE;
  state = LoteryState.Finished;
  LOTERY_CAGNOTE = 0;
  lastResult.blockFin = blockEnd;
  blockEnd = 0;
}

function closeGame() public onlyOwner
{
  require(state == LoteryState.Finished);
  require(block.number > lastResult.blockFin + blockSave);
  state = LoteryState.Pending;
}

function saveWin() public
{
  require(state == LoteryState.Finished);
  require(prediction[msg.sender] == lastResult.cagnote);
  win[lastResult.numCagnote][msg.sender] = true;
  lastResult.nbGagnants += 1;
  prediction[msg.sender] = 0;
}

function withdrawGains() public
{
  require(win[lastResult.numCagnote][msg.sender] == true);
  require(state == LoteryState.Pending);
  require(prediction[msg.sender] == lastResult.cagnote);
  win[lastResult.numCagnote][msg.sender] == false;
  msg.sender.transfer(lastResult.cagnote.div(lastResult.nbGagnants));
}

function getStateGame() public view returns (string memory)
{
  if(state == LoteryState.Pending){
    return "Jeux fermé : récupérez vos gains";
  }
  else if(state == LoteryState.Finished){
    return "Jeux terminé : déclarez votre victoire";
  }
  else{
    return "Jeux en cours";
  }
}

function getPrixLotery() public view returns (uint)
{
  return PRICE_LOTERY_TOKEN;
}

function getEndGame() public view returns (uint)
{
  return blockEnd;
}

function getSuperCagnote() public view returns (uint)
{
  return LOTERY_CAGNOTE;
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

function getSolde() public view returns (uint)
{
  return balanceOf(msg.sender);
}

function modifierBlockStop(uint _stop) public onlyOwner
{
  blockStop = _stop;
}

function getCagnote() public view returns (uint)
{
  return lastResult.cagnote;
}

function getBlock() public view returns (uint)
{
  return block.number;
}

function getGains() public view returns (uint)
{
  if (win[lastResult.numCagnote][msg.sender] == false)
  {
  return 0;
  }
  else return lastResult.cagnote.div(lastResult.nbGagnants);

}

function getNbGagnants() public view returns (uint)
{
  return lastResult.nbGagnants;
}

function getWithdrawBlock() public view returns (uint)
{
  if (state == LoteryState.Pending)
  {
  return 0;
  }
  else return blockEnd + blockSave + blockWithdraw;
}

function getSaveBlock() public view returns (uint)
{
  if (state == LoteryState.Finished || state == LoteryState.Pending)
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
  PRICE_LOTERY_TOKEN = _price;
}


}
