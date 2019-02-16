pragma solidity ^0.4.25;
contract SceneOuverte {
  string[12] passagesArtistes;
  uint creneauxLibres = 12;
  uint tour;

  function sInscrire(string memory nomArtiste) public {
    if (creneauxLibres > 0) {
      passagesArtistes[12-creneauxLibres] = nomArtiste;
      creneauxLibres--;
    }
  }

  function passerArtisteSuivant() public return (string) {
    if (tour<12) {
      tour++;
      return artisteEnCours();
    } else {
      return "FIN";
    }
  }

  function artisteEnCours() public constant returns (string) {
    return passagesArtistes[tour];
  }

}
