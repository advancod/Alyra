pragma solidity ^0.5.0;

import "./Cagnottes.sol";

interface InterfaceCagnottes
{
function getGroupesPerAddress() external view returns (uint[] memory);

function getNomMembre(uint _ID) external view returns (string memory);

function getMontant(uint _ID) external view returns (uint);

function getBlockFermeture(uint _ID) external view returns (uint);

function getEncours(uint _ID) external view returns (uint);

function getDonnations(uint _ID) external view returns (uint);

function getDescription(uint _ID) external view returns (string memory);

function getNomGroupe(uint _ID) external view returns (string memory);

}
