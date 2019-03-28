Cette application permet la création de réseau sociaux poussant à l'entraide dans les dépenses quotidiennes tout en alimentant une cagnotte de jeux auxquels les membres peuvent participer grace a l'utilisation de tokens ERC20.

- Création et gestion de groupes
- Demandes de financement
- Verification de financement possible
- Etablissement de statistiques d'activité
- Echange d'un pourcentage de chaque versement en ether contre des tokens.
- Les tokens sont ensuite bruler lors de la participation à un jeux
- Ce jeux consiste en la liquidation de la cagnotte accumulé par les frais de chaque transactions.
- Le modèle éco consiste d'une part à charger faiblement les créations de groupes, adhésions, ouvertures de demandes. Mais surtout en la gestion financière des fonds emprunmptés par le contrat (emmission de tokens) jusqu'à leur rétribution sous forme de jackpot aux utilisateurs

Il s'agit la d'une simple DApp développées en solidity javascript/ether.js sur la chaine ethereum

Créez un dossier :
$npm install -g truffle

Y copier le dossier du lien suivant :
https://github.com/advancod/Alyra/tree/master/project/Ether-Union

Ouvrez un client ganache :
Localhost
port 7545
network ID = 5777

Sur metamask configurez la connection RPC correspondante

Installation
Assurez vous que vous êtes dans le dossier Ether-Union

$truffle migrate

copier le contract address de la seconde migration et remplir la variable "contractAddress" dans dist/index.js

retourner dans le dossier Ether-Union

$npm install

$npx live-server

- Creez un groupe
- Rafraichissez
- Ajoutez un membre
- Rafraichissez
- effectuer une demande
- solder une demande
- tanter de gagner a la lotterie!!!!
