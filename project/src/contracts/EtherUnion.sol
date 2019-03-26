pragma solidity ^0.5.0;

import "./Cagnottes.sol";
import "./ICagnottes.sol";

contract EtherUnion is Cagnottes, ICagnottes{

function modifierMaxGroups(uint _maxGroups) public onlyOwner
{
  require(_maxGroups >= 10 && _maxGroups <= 1000);
  MAX_GROUPS = _maxGroups;
}

function modifierDelai(uint _maxDelai) public onlyOwner
{
  require(_maxDelai >= 10 && _maxDelai <= 1000000000);
  MAX_DELAI = _maxDelai;
}

function modifierMaxMembre(uint _maxMembre) public onlyOwner
{
  require(_maxMembre >= 5 && _maxMembre <= 200);
  MAX_MEMBRE = _maxMembre;
}

function modifierMaxAmount(uint _maxAmount) public onlyOwner
{
  require(_maxAmount >= 10000000 && _maxAmount <= 100000000000000);
  MAX_AMOUNT = _maxAmount;
}

function modifierMinAmount(uint _minAmount) public onlyOwner
{
  require(_minAmount >= 100000 && _minAmount <= 1000000);
  MIN_AMOUNT = _minAmount;
}

function modifierPriceChannel(uint _priceChannel) public onlyOwner
{
  require(_priceChannel >= 100);
  PRICE_RATIO = _priceChannel;
}

function getGroupesPerAddress() public view returns (uint[] memory)
{
  return mappGroupesForAddress[msg.sender];
}

function getMembres(string memory _groupe) public view returns (uint[] memory)
{
  return mappGroupeAndChannels[_groupe];
}

function getNomMembre(uint _ID) public view returns (string memory)
{
  return mappChannel[_ID].pseudo;
}

function getContratCible(uint _ID) public view returns (address)
{
  return mappChannel[_ID].contratCible;
}

function getMontant(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].montant;
}

function getBlockFermeture(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].blocFermeture;
}

function getEncours(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].enCours;
}

function getDonnations(uint _ID) public view returns (uint)
{
  return mappChannel[_ID].donnations;
}

function getDescription(uint _ID) public view returns (string memory)
{
  return mappChannel[_ID].description;
}

function getNomGroupe(uint _ID) public view returns (string memory)
{
  return mappIDGroupe[_ID];
}

function getOwnPseudo(string memory groupe) public view returns (string memory)
{
  for (uint i = 0 ; i < mappGroupeAndChannels[groupe].length; i ++)
  {
    if (mappChannel[mappGroupeAndChannels[groupe][i]].demandeur == msg.sender)
    {
      return mappChannel[mappGroupeAndChannels[groupe][i]].pseudo;
    }
  }
}

}
