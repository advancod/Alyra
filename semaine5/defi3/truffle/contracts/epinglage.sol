pragma solidity ^0.5.0;

contract Epinglage{
	event Epingler(bytes32 pin);
	bytes32[] listePin;

	function payerStockage(bytes32 pinUrl)public payable {
	 	require(msg.value  >= 100 finney);
	 	listePin.push(pinUrl);
		emit Epingler(pinUrl);
	}
}
