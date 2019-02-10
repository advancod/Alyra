pragma solidity ^0.5.3;
pragma experimental ABIEncoderV2;

import "./Illustrateur.sol";

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Demandes is Illustrateur {

event challengeAccepte(address addresseIllustrateur, address addressedemandeur, uint projet);
event dessinLivre(address addresseIllustrateur, address addressedemandeur, uint projet, bytes32 dessin);
event dessinValide(bool status, address addressedemandeur, uint projet);
event challengeAnnule(address addresseIllustrateur, address addressedemandeur,  uint projet);
event solicitation(uint _IDdemande, address addresseIllustrateur);

using SafeMath for uint256;

Illustrateur internal unIllustrateur;
uint private offreNumber;

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

 uint[] listeDemandes;

 mapping (uint => address) private affectations; // liste des projets en cours
 mapping (uint => address) private demandeur; // mapping des projets avec les addresses des demandeurs
 mapping (uint => bytes32) private contractualisation; // projets en attente de validation
 mapping (bytes32 => address) private proposition; // mapping des dessins avec leurs illustrateurs
 mapping (uint => address) private candidat; // liste des illustrateurs en attente d'acceptation
 mapping (uint => demande) private appelOffres; // liste des projets proposés
 mapping (uint => bool) private locked; // candidatures bloquées en attente d'une réponse à un illustrateur déja candidat

 function ajouterDemande(uint _remuneration, uint _delai, string memory _description, uint _reputationMinimum) public returns (uint){
    appelOffres[offreNumber].remuneration = _remuneration;
    appelOffres[offreNumber].delai = _delai;
    appelOffres[offreNumber].description = _description;
    appelOffres[offreNumber].reputationMinimum = _reputationMinimum;
    appelOffres[offreNumber].emetteur = msg.sender;
    appelOffres[offreNumber].status = SomeData.ENATTENTE;
    demandeur[offreNumber] = msg.sender;
    offreNumber += 1;
    locked[offreNumber]==false;
    listeDemandes.push(offreNumber);
    return offreNumber-1;
  }

  function payerDemande(uint _IDdemande) public payable {
    require(demandeur[_IDdemande] == msg.sender,"vous n etes pas proprietaire de ce projet");
    require(msg.value >= appelOffres[_IDdemande].remuneration.add((appelOffres[_IDdemande].remuneration.mul(20)).div(100)),"payment pas assez eleve");
    appelOffres[_IDdemande].status = SomeData.OUVERTE;
  }

  function postuler(uint _IDdemande) enable public{
    require(locked[_IDdemande]==false,"il y a deja un illustrateur en attente d une reponse");
    require(unIllustrateur.getReputation(msg.sender).reputation >= appelOffres[_IDdemande].reputationMinimum,"vous n etes pas assez repute");
    require(appelOffres[_IDdemande].status == SomeData.OUVERTE,"ce projet n est pas encore ouvert");
    candidat[_IDdemande] = msg.sender;
    locked[_IDdemande]==true;
  }

  function accepterOffre(uint _IDdemande, address _postulant) public{
    require(candidat[_IDdemande] == _postulant,"le postulant pas acces a ce projet");
    require(demandeur[_IDdemande] == msg.sender,"vous n avez pas acces a ce projet");
    appelOffres[_IDdemande].status = SomeData.ENCOURS;
    affectations[_IDdemande] = _postulant;
    delete locked[_IDdemande];
    emit challengeAccepte(affectations[_IDdemande], demandeur[_IDdemande], _IDdemande);
  }

  function livraison (bytes32 _hash, uint _IDdemande) enable public{
   require(affectations[_IDdemande] == msg.sender,"vous n avez pas acces a ce projet");
   require(appelOffres[_IDdemande].status == SomeData.ENCOURS,"projet non demarre");
    proposition[_hash]=msg.sender;
    contractualisation[_IDdemande]=_hash;
    delete candidat[_IDdemande];
    delete demandeur[_IDdemande];
emit dessinLivre(affectations[_IDdemande], demandeur[_IDdemande], _IDdemande, _hash);
  }

  function validation (uint _IDdemande, bytes32 _hash) public{
    require(appelOffres[_IDdemande].status == SomeData.ENCOURS,"projet non demarre");
    require(contractualisation[_IDdemande] == _hash,"erreur de dessin");
     if (appelOffres[_IDdemande].delai > now){
        appelOffres[_IDdemande].status = SomeData.FERMEE;
        unIllustrateur.getReputation(affectations[_IDdemande]).reputation += 1;
        emit dessinValide(true, demandeur[_IDdemande], _IDdemande);
     }
     else appelOffres[_IDdemande].status = SomeData.OUVERTE;
     delete contractualisation[_IDdemande];
     emit dessinValide(false, demandeur[_IDdemande], _IDdemande);
  }

    function recupererFonds (uint _IDdemande) public{
    require(appelOffres[_IDdemande].delai < now,"delai non respecte");
    require(appelOffres[_IDdemande].status == SomeData.OUVERTE,"aucun fonds deposes");
    require(appelOffres[_IDdemande].emetteur == msg.sender,"vous netes pas proprietaire de ce projet");
    msg.sender.transfer(appelOffres[_IDdemande].remuneration.add((appelOffres[_IDdemande].remuneration.mul(2)).div(100)));
    appelOffres[_IDdemande].status = SomeData.FERMEE;
    emit challengeAnnule(affectations[_IDdemande], demandeur[_IDdemande], _IDdemande);
    }

  function payerIllustrateur (uint _IDdemande) public{
      require(appelOffres[_IDdemande].status == SomeData.FERMEE,"ce projet n est pas ferme");
      require(affectations[_IDdemande] == msg.sender,"vous n avez pas contribue a ce projet");
      msg.sender.transfer(appelOffres[_IDdemande].remuneration);
      delete affectations[_IDdemande];
  }

  function getListeDemandes() public view returns (uint[] memory){
     return listeDemandes;
   }

    function getDemande(uint ID) enable public view returns (demande memory){
      return appelOffres[ID];
    }

   function soliciterIllustrateur(uint _IDdemande, address _addresse) public{
     require(appelOffres[_IDdemande].emetteur == msg.sender,"vous netes pas proprietaire de ce projet");
     require(locked[_IDdemande]==false,"il y a deja un illustrateur en attente d une reponse");
     require(appelOffres[_IDdemande].status == SomeData.OUVERTE,"ce projet n est pas encore ouvert");
     emit solicitation(_IDdemande, _addresse);
   }

}
