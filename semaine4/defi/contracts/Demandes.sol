//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;

import "./Illustrateur.sol";

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Demandes is Illustrateur {

event challengeAccepte(address addresseIllustrateur, address addressedemandeur);
event dessinLivre(address addresseIllustrateur, address addressedemandeur);
event dessinValide(address addresseIllustrateur, address addressedemandeur, uint reputationActuelle);
event dessinRejete(address addresseIllustrateur, address addressedemandeur, uint reputationActuelle);
event challengeAnnule(address addresseIllustrateur, address addressedemandeur);

using SafeMath for uint256;

  Illustrateur internal unIllustrateur;
uint offreNumber;

  enum SomeData {ENATTENTE,OUVERTE,ENCOURS,FERMEE}

constructor() public {
 offreNumber = 0;
 }

  struct demande {
   address emetteur;
   uint remuneration;
   uint delai;
   string description;
   uint reputationMinimum;
   SomeData status;
 }

 mapping (uint => address) public affectations; // liste des projets en cours
 mapping (uint => address) public demandeur; // mapping des projets avec les addresses des demandeurs
 mapping (uint => bytes32) public contractualisation; // projets en attente de validation
 mapping (bytes32 => address) public proposition; // mapping des dessins avec leutrs illustrateurs
 mapping (uint => address) public candidat; // liste des illustrateurs en attente d'acceptation
 mapping (uint => demande) public appelOffres; // liste des projets proposés

 function ajouterDemande(uint _remuneration, uint _delai, string memory _description, uint _reputationMinimum) public returns (uint){
    appelOffres[offreNumber].remuneration = _remuneration;
    appelOffres[offreNumber].delai = _delai;
    appelOffres[offreNumber].description = _description;
    appelOffres[offreNumber].reputationMinimum = _reputationMinimum;
    appelOffres[offreNumber].emetteur = msg.sender;
    appelOffres[offreNumber].status = SomeData.ENATTENTE;
    demandeur[offreNumber] = msg.sender;
    offreNumber += 1;
    return offreNumber-1;
  }

  function payerDemande(uint _IDdemande) public payable {
    require(demandeur[_IDdemande] == msg.sender);
    require(msg.value >= appelOffres[_IDdemande].remuneration.add((appelOffres[_IDdemande].remuneration.mul(20)).div(100)));
    appelOffres[_IDdemande].status = SomeData.OUVERTE;
  }

  function postuler(uint _IDdemande) enable public{
    require(candidat[_IDdemande] == address(0));
    require(unIllustrateur.getReputation(msg.sender).reputation >= appelOffres[_IDdemande].reputationMinimum);
    require(appelOffres[_IDdemande].status == SomeData.OUVERTE);
    candidat[_IDdemande] = msg.sender;
  }

  function accepterOffre(uint _IDdemande, address _postulant) public{
    require(candidat[_IDdemande] == _postulant);
    require(demandeur[_IDdemande] == msg.sender);
    appelOffres[_IDdemande].status = SomeData.ENCOURS;
    affectations[_IDdemande] = _postulant;
    emit challengeAccepte(affectations[_IDdemande], demandeur[_IDdemande]);
  }

  function afficherDemande(uint _IDdemande) enable public view returns (demande memory){
    return appelOffres[_IDdemande];
  }

  function livraison (bytes32 _hash, uint _IDdemande) enable public{
   require(affectations[_IDdemande] == msg.sender);
   require(appelOffres[_IDdemande].status == SomeData.ENCOURS);
    proposition[_hash]=msg.sender;
    contractualisation[_IDdemande]=_hash;
    emit dessinLivre(affectations[_IDdemande], demandeur[_IDdemande]);
  }

  function validation (uint _IDdemande, bytes32 _hash) public{
    require(appelOffres[_IDdemande].status == SomeData.ENCOURS);
    require(contractualisation[_IDdemande] == _hash);
     if (appelOffres[_IDdemande].delai > now){
        appelOffres[_IDdemande].status = SomeData.FERMEE;
        unIllustrateur.getReputation(affectations[_IDdemande]).reputation += 1;
        emit dessinValide(affectations[_IDdemande], demandeur[_IDdemande], unIllustrateur.getReputation(affectations[_IDdemande]).reputation);
     }
     else appelOffres[_IDdemande].status = SomeData.OUVERTE;
     emit dessinRejete(affectations[_IDdemande], demandeur[_IDdemande], unIllustrateur.getReputation(affectations[_IDdemande]).reputation);
  }

    function debloquerFonds (uint _IDdemande) public{
    require(appelOffres[_IDdemande].delai < now);
    require(appelOffres[_IDdemande].status == SomeData.OUVERTE);
    require(appelOffres[_IDdemande].emetteur == msg.sender);
    msg.sender.transfer(appelOffres[_IDdemande].remuneration.add((appelOffres[_IDdemande].remuneration.mul(20)).div(100)));
    appelOffres[_IDdemande].status = SomeData.FERMEE;
    emit challengeAnnule(affectations[_IDdemande], demandeur[_IDdemande]);
    }

  function paymentIllustrateur (uint _IDdemande) public{
      require(appelOffres[_IDdemande].status == SomeData.FERMEE);
      msg.sender.transfer(appelOffres[_IDdemande].remuneration);
  }

}
