![Settings Window](https://github.com/advancod/Alyra/blob/master/project/Capture%20d%E2%80%99%C3%A9cran%202019-05-21%20%C3%A0%2002.17.49.png)

Cette application permet la création de réseau sociaux poussant à l'entraide dans les dépenses quotidiennes tout en alimentant une cagnotte de jeux auxquels les membres peuvent participer grace a l'utilisation de tokens ERC20.

- Création et gestion de groupes
- Demandes de financement
- Verification de financement possible
- Etablissement de statistiques d'activité
- Echange d'un pourcentage de chaque versement en ether contre des tokens.
- Les tokens sont ensuite brulés lors de la participation à un jeux
- Ce jeux consiste en la liquidation de la cagnotte accumulé par les frais de chaque transactions.

Il s'agit la d'une DApp développée en solidity/react/webpack sur la chaine ethereum développée s

Ouvrir Chrome Ouvrir un metamask et le connecter au reseau de test ropsten

Y copier le dossier du lien suivant :
https://github.com/advancod/Alyra/tree/master/project/


- version react/ethers dans ETHER-UNION
Aller dans le dossier front end :

$ npm install
$ npm run start


- Creez un groupe
- Ajoutez un membre
- effectuer une demande
- solder une demande
- tentez de gagner a la loterie!!!!

Principe de loterie :

Il s'agit en fait plus d'un jeux que d'une lotterie. Ici le propriétaire du groupe déclanchera la loterie via un contrat externe.

L'utilisateur doit tout simplement deviner le montant de la cagnotte globale du contrat dans un bloc futur donnée.

Vous devez posséder des token UNION pour jouer a la lotterie.

Evolutions :
- utilistation de bridge pour les canaux de paiement
- Version mobile
- déployer sur IPFS
- Améliorer l'administration des groupes (administrateurs multiples, suppression de membres, blacklistings)
- Mise en place d'une DAO pour la gestion des prix et quantité de tickets de loterie et autres paramétrages
