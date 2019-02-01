Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @advancod Sign out
1
0 0 DigitalDICKO/alyra-exercice
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
alyra-exercice/Semaine_03/3_sceneouverte.sol
f6fb277  14 hours ago
@DigitalDICKO DigitalDICKO Semaine 3 administrateurs

28 lines (24 sloc)  659 Bytes
//Write your own contracts here. Currently compiles using solc v0.4.15+commit.bbb8e64f.
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
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
