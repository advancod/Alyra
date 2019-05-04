Cette application permet la création de réseau sociaux poussant à l'entraide dans les dépenses quotidiennes tout en alimentant une cagnotte de jeux auxquels les membres peuvent participer grace a l'utilisation de tokens ERC20.

- Création et gestion de groupes
- Demandes de financement
- Verification de financement possible
- Etablissement de statistiques d'activité
- Echange d'un pourcentage de chaque versement en ether contre des tokens.
- Les tokens sont ensuite bruler lors de la participation à un jeux
- Ce jeux consiste en la liquidation de la cagnotte accumulé par les frais de chaque transactions.
- Le modèle éco consiste d'une part à charger faiblement les créations de groupes, adhésions, ouvertures de demandes. Mais surtout en la gestion financière des fonds emprunmptés par le contrat (emmission de tokens) jusqu'à leur rétribution sous forme de jackpot aux utilisateurs

Il s'agit la d'une simple DApp développées en solidity javascript/ether.js sur la chaine ethereum développée sur truffle, déployé et épinglé sur le réseau ipfs

Créez un dossier et y entrer la ligne de commande:
$npm install -g truffle

Y copier le dossier du lien suivant :
https://github.com/advancod/Alyra/tree/master/project/Ether-Union

Installation
Assurez vous que vous êtes dans le dossier Ether-Union

$truffle migrate

copier le contract address de la seconde migration et remplir la variable "contractAddress" dans dist/index.js

Pour le mode test :

retourner dans le dossier Ether-Union

$npm install

$npx live-server

Ouvrir Chrome Ouvrir un metamask et le connecter au reseau de test ropsten
et lancer http://localhost:8080/

Pour la version déja déployée sur ipfs (ropsten) :

https://gateway.ipfs.io/ipfs/QmeSRvmrf1xMiMZvcFuuuTHucsBQUS1ikCQx84zX2eEyCD/

- Creez un groupe
- Rafraichissez
- Ajoutez un membre
- Rafraichissez
- effectuer une demande
- solder une demande
- tanter de gagner a la loterie!!!!

Principe de loterie :

Il s'agit en fait plus d'un jeux que d'une lotterie. Ici le propriétaire du groupe déclanchera la loterie via un contrat externe.

L'utilisateur doit tout simplement deviner le montant de la cagnotte globale du contrat dans un bloc futur donnée.

Vous devez posséder des token UNION pour jouer a la lotterie.

Evolutions :
- utilistation de bridge pour les canaux de paiement
- Ajout d'une couche front react native
- Améliorer l'administration des groupes (administrateurs multiples, suppression de membres, blacklistings)
- Mettre en place un modèle économique faisant fructifier les ethers bloqués dans le contrat (ex cdp)
- Création du contrat controlant le cicle de vie de la loterie.
- Amélioration du rapport difficulté/prix/gains/probabilité du jeux.
- Améliorer les statistiques grace à fonctionnalité de vérification de paiement "contrat cible" par le rensu du hash de transaction et affiliation des entreprises beneficiaires des contrats cibles pour reconnaissance directe des versements

https://ds453.haisoft.net:8443/
hassan
?#6x]=k2vV)$
chown -R admindeepblockfr:psaserv securact.deepblock.fr
ls -l


cle github securact

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDrUH25cVA/6Jjkww+O7xjdi3snUrJQzRNsMkWO8aq670zjhHvOvYvLPGvbdnNTGKKNe3sTa2HGkQrLDIz+XEDh/XikFWv4Ke3IHJw7X65vjHpTcn7IkpS68q7sfWmJ5VWOZQtA5hSAZ7FGp+eMI4GxrPMuF9qY+B1/eJ52rfko1Gm8VOQ2SVzaZIVhqaaGEkomqXW/pM7gQr9Ulh5wILaPVUomiP6VowSTze6soDSjnwwPR7uoSnU5Qx7zqYsOh/Ckj8COUkK13A+51i+5QvNcz5oF+v1plJM7p+EvK9VHY+zZzwMwuxetp27YoB3F1zUmGMHW2hpPE2OMQtHS5al4XY9x9iM6L6fJCQsnLW9IGUT2UrqFvukgbXBSTXNRaoxLbDz7tw1WEQbRe37NzfGGvIuYbRUe3FJeqJGESGksOWEOdlxCDMKZWOdQ87WmdHvoJIDBuezlas5DmEMNnY1eBYOSSmEZzRNomA2K2mgUyN4s0A7HLckhjmGVEbpjwzK4EVkR0RJl4fq3InJ4FT9ovTRAmV2aO2276bfCB0pCBXvJGa46IrTH3vT+FVSDsfJ6ekHhE0HT+dp9XXO9VCvcxIOcHwGWEUNNXQAtmu+oRSP3K89siNvS/43uTHb9f009EibLV/V+MiBYuwuhd9DNC8D37WZSj2RQKfwDsFnVow==
