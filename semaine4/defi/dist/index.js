const abiIllustrations =
[{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"}],"name":"recupererFonds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reputations","outputs":[{"name":"cryptopseudo","type":"string"},{"name":"reputation","type":"uint256"},{"name":"services","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getListeDemandes","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"addressesBannies","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"}],"name":"payerIllustrateur","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_url","type":"string"}],"name":"produireHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"}],"name":"postuler","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addresse","type":"address"}],"name":"bannissement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_hash","type":"bytes32"},{"name":"_IDdemande","type":"uint256"}],"name":"livraison","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getListeIllustrateurs","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_services","type":"string"}],"name":"majServices","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"},{"name":"_hash","type":"bytes32"}],"name":"validation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"}],"name":"payerDemande","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addresse","type":"address"}],"name":"getReputation","outputs":[{"components":[{"name":"cryptopseudo","type":"string"},{"name":"reputation","type":"uint256"},{"name":"services","type":"string"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"appelOffres","outputs":[{"name":"emetteur","type":"address"},{"name":"remuneration","type":"uint256"},{"name":"delai","type":"uint256"},{"name":"description","type":"string"},{"name":"reputationMinimum","type":"uint256"},{"name":"status","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"},{"name":"_addresse","type":"address"}],"name":"soliciterIllustrateur","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_remuneration","type":"uint256"},{"name":"_delai","type":"uint256"},{"name":"_description","type":"string"},{"name":"_reputationMinimum","type":"uint256"}],"name":"ajouterDemande","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_IDdemande","type":"uint256"},{"name":"_postulant","type":"address"}],"name":"accepterOffre","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_cryptopseudo","type":"string"},{"name":"_services","type":"string"}],"name":"inscription","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addresseIllustrateur","type":"address"},{"indexed":false,"name":"addressedemandeur","type":"address"},{"indexed":false,"name":"projet","type":"uint256"}],"name":"challengeAccepte","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addresseIllustrateur","type":"address"},{"indexed":false,"name":"addressedemandeur","type":"address"},{"indexed":false,"name":"projet","type":"uint256"},{"indexed":false,"name":"dessin","type":"bytes32"}],"name":"dessinLivre","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"addressedemandeur","type":"address"},{"indexed":false,"name":"projet","type":"uint256"}],"name":"dessinValide","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addresseIllustrateur","type":"address"},{"indexed":false,"name":"addressedemandeur","type":"address"},{"indexed":false,"name":"projet","type":"uint256"}],"name":"challengeAnnule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_IDdemande","type":"uint256"},{"indexed":false,"name":"addresseIllustrateur","type":"address"}],"name":"solicitation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addressBanished","type":"address"}],"name":"bannishement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];

let contractAddress = "0xB48139F3B1E5B0275CC12ed0A542F9Ea865E4657";
const provider = new ethers.providers.Web3Provider(ethereum);
let contractWrite = new ethers.Contract(contractAddress, abiIllustrations, provider.getSigner());

async function _ajouterDemande() {
try {
  await ethereum.enable();
	let remuneration = document.getElementById('remuneration').value;
	let delai = document.getElementById('delai').value;
	let description = document.getElementById('description').value;
	let reputationMin = document.getElementById('reputationMin').value;
	await contractWrite.ajouterDemande(remuneration,delai,description,reputationMin);
} catch(err) {
  console.error(err);
}
}

async function _bannissement() {
try {
  await ethereum.enable();
	let addresse = document.getElementById('addresse1').value;
	await contractWrite.bannissement(addresse);;
} catch(err) {
  console.error(err);
}
}

async function _inscription() {
try {
  await ethereum.enable();
	let cryptopseudo = document.getElementById('cryptopseudo2').value;
	let services = document.getElementById('services2').value;
	await contractWrite.inscription(cryptopseudo,services);
} catch(err) {
  console.error(err);
}
}

async function _majServices() {
try {
  await ethereum.enable();
	let services = document.getElementById('services23').value;
	await contractWrite.majServices(services);
} catch(err) {
  console.error(err);
}
}

async function _payerDemande() {
try {
  await ethereum.enable();
	let IDDemande = document.getElementById('IDDemande3').value;
	await contractWrite.payerDemande(IDDemande, {value : 5000});
} catch(err) {
  console.error(err);
}
}

async function _payerIllustrateur() {
try {
  await ethereum.enable();
	let IDDemande = document.getElementById('IDDemande4').value;
	await contractWrite.payerIllustrateur(IDDemande);
} catch(err) {
  console.error(err);
}
}

async function _postuler() {
try {
  await ethereum.enable();
	let IDDemande = document.getElementById('IDDemande5').value;
	await contractWrite.postuler(IDDemande);
} catch(err) {
  console.error(err);
}
}

async function _recupererFonds() {
try {
  await ethereum.enable();
	let IDDemande = document.getElementById('IDDemande6').value;
	await contractWrite.recupererFonds(IDDemande);
} catch(err) {
  console.error(err);
}
}

async function demarrage() {
_getListeIllustrateurs();
_getListeDemandes();
}

async function _getListeDemandes() {
try {
document.getElementById('getListeDemandes').innerHTML = await contractWrite.getListeDemandes();
} catch(err) {
  console.error(err);
}
}

async function _getListeIllustrateurs() {
try {
document.getElementById('getListeIllustrateurs').innerHTML = await contractWrite.getListeIllustrateurs();
} catch(err) {
  console.error(err);
}
}

async function _soliciterIllustrateur() {
try {
await ethereum.enable();
let IDDemande = document.getElementById('ID').value;
let addresse = document.getElementById('addresse').value;
await contractWrite.soliciterIllustrateur(IDDemande,addresse);
} catch(err) {
  console.error(err);
}
}

async function _getReputation() {
try {
let addresse = document.getElementById('addresse9').value;
document.getElementById('getReputation').innerHTML = await contractWrite.getReputation(addresse);
} catch(err) {
  console.error(err);
}
}

async function _accepterOffre() {
try {
await ethereum.enable();
let addresse = document.getElementById('addresse10').value;
let IDDemande = document.getElementById('IDDemande12').value;
await contractWrite.accepterOffre(IDDemande,addresse);
} catch(err) {
  console.error(err);
}
}

async function _validation() {
try {
await ethereum.enable();
let IDDemande = document.getElementById('IDDemande10').value;
let hash = document.getElementById('hash2').value;
await contractWrite.validation(IDDemande, hash);
} catch(err) {
  console.error(err);
}
}

async function _livraison() {
try {
await ethereum.enable();
let IDDemande = document.getElementById('IDDemande11').value;
let hash = document.getElementById('hash').value;
await contractWrite.livraison(hash,IDDemande);
} catch(err) {
  console.error(err);
}
}

async function _produireHash() {
try {
let url = document.getElementById('url').value;
document.getElementById('produireHash').innerHTML = await contractWrite.produireHash(url);
} catch(err) {
  console.error(err);
}
}

async function _getDemande() {
try {
let ID = document.getElementById('ID20').value;
document.getElementById('getDemande').innerHTML = await contractWrite.appelOffres(ID);
} catch(err) {
  console.error(err);
}
}
