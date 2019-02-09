pragma solidity ^0.5.3;

contract Ownable {

  address public owner;
  mapping(address => uint256) private _deposits;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  function isOwnable() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }


}
