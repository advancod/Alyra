pragma solidity ^0.5.1;

import "./ERC721.sol";

contract ZombieFactory {

  event NewZombie(uint zombieId, string name, uint dna);

  string public constant name = "ZOMBIEFIGHTERDEAD";
  string public constant symbol = "ZFD";

  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits;
  uint cooldownTime = 1 days;

  struct Zombie {
    string name;
    uint dna;
    uint32 level;
    uint32 readyTime;
    uint16 winCount;
    uint16 lossCount;
  }

  Zombie[] public zombies;

  mapping (uint => address) public zombieToOwner;
  mapping (address => uint) ownerZombieCount;

  function _createZombie(string memory _name, uint _dna) internal {
    uint id = zombies.push(Zombie(_name, _dna, 1, uint32(now + cooldownTime), 0, 0)) - 1;
    zombieToOwner[id] = msg.sender;
    ownerZombieCount[msg.sender]++;
    emit NewZombie(id, _name, _dna);
  }

  function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0);
    uint randDna = uint(blockhash(block.number-1)) % dnaModulus;
    randDna = randDna - randDna % 100;
    _createZombie(_name, randDna);
  }

}
