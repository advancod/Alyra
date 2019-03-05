pragma solidity ^0.5.1;

contract SimpleContrat{

string public name;
event nameChange(string name)

  constructor (string memory _name) public {
    name = _name;
  }

  function test() public view returns (string memory) {
      return name;
  }

  function change() public returns (string memory) {
      name = 'SHUT UP';
      emit changeName(name);
      return name;
  }

}
