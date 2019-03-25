const abiCagnottes =
[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_membre", "type": "address" }, { "name": "_groupe", "type": "string" } ], "name": "ajouterAdmin", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_token", "type": "uint256" } ], "name": "consommerTokens", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "myGimicoin", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" } ], "name": "fermetureCanal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_groupe", "type": "string" }, { "name": "_pseudo", "type": "string" }, { "name": "_token", "type": "uint256" } ], "name": "payerCanal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_membre", "type": "address" }, { "name": "_groupe", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "ajouterMembre", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_nom", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "creerGroupe", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_montant", "type": "uint256" }, { "name": "_delai", "type": "uint256" }, { "name": "_pseudo", "type": "string" }, { "name": "_description", "type": "string" } ], "name": "demander", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "constant": false, "inputs": [ { "name": "_maxGroups", "type": "uint256" } ], "name": "modifierMaxGroups", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxDelai", "type": "uint256" } ], "name": "modifierDelai", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxMembre", "type": "uint256" } ], "name": "modifierMaxMembre", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxAmount", "type": "uint256" } ], "name": "modifierMaxAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_minAmount", "type": "uint256" } ], "name": "modifierMinAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_priceChannel", "type": "uint256" } ], "name": "modifierPriceChannel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getGroupesPerAddress", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_groupe", "type": "string" } ], "name": "getMembres", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomMembre", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getMontant", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getBlockFermeture", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getEncours", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDonnations", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDescription", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomGroupe", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ];

let contractAddress = "0x49493BF7eBC44bfF5B2Dd877768d3056eA7eA431";
const provider = new ethers.providers.Web3Provider(ethereum);
let contractInstance = new ethers.Contract(contractAddress, abiCagnottes, provider.getSigner());

async function demarrage() {
  try {
    var list = await contractInstance.getGroupesPerAddress();
    for (var i = 0; i < list.length; i++) {
      var list2 = await contractInstance.getNomGroupe(list[i]);
      for (var j = 0; j < list2.length; j++) {
        document.getElementById(j).innerHTML = await contractInstance.getNomGroupe(list2[j], {gas : 5000000});
      }
    }
  } catch(err) {
  console.error(err);
  }
}

async function _getNomGroupe() {
try {
let ID = document.getElementById('ID').value;
document.getElementById('getNomGroupe').innerHTML = await contractInstance.getNomGroupe(ID);
} catch(err) {
  console.error(err);
}
}

async function _getMembres() {
try {
let nomGroupe = document.getElementById('nomGroupe').value;
document.getElementById('getMembres').innerHTML = await contractInstance.getMembres(nomGroupe);
} catch(err) {
  console.error(err);
}
}

async function _getNomMembre() {
try {
let ID = document.getElementById('ID').value;
document.getElementById('getNomMembre').innerHTML = await contractInstance.getNomMembre(ID);
} catch(err) {
  console.error(err);
}
}

async function _getDescription() {
try {
let ID = document.getElementById('ID').value;
document.getElementById('getDescription').innerHTML = await contractInstance.getDescription(ID);
} catch(err) {
  console.error(err);
}
}

async function _getDonnations() {
try {
let ID = document.getElementById('ID').value;
document.getElementById('getDonnations').innerHTML = await contractInstance.getDonnations(ID);
} catch(err) {
  console.error(err);
}
}

async function _getMontant() {
try {
let ID = document.getElementById('ID').value;
document.getElementById('getMontant').innerHTML = await contractInstance.getMontant(ID);
} catch(err) {
  console.error(err);
}
}

async function _getEncours() {
try {
let ID = document.getElementById('ID').value;
document.getElementById('getEncours').innerHTML = await contractInstance.getEncours(ID);
} catch(err) {
  console.error(err);
}
}

async function _creerGroupe() {
  try {
    await ethereum.enable();
  	let nom = document.getElementById('nom').value;
  	let pseudo = document.getElementById('pseudo').value;
  	await contractInstance.creerGroupe(nom,pseudo);
  } catch(err) {
  console.error(err);
}
}

async function _ajouterMembre() {
  try {
    await ethereum.enable();
  	let membre = document.getElementById('membre').value;
  	let groupe = document.getElementById('groupe').value;
  	let pseudo = document.getElementById('pseudo').value;
  	await contractInstance.ajouterMembre(membre,groupe,pseudo);
  } catch(err) {
  console.error(err);
}
}

async function _demander() {
  try {
    await ethereum.enable();
  	let montant = document.getElementById('montant').value;
  	let delai = document.getElementById('delai').value;
  	let pseudo = document.getElementById('pseudo').value;
    let description = document.getElementById('description').value;
  	await contractInstance.demander(montant,delai,pseudo,description);
  } catch(err) {
  console.error(err);
}
}

async function _payerCanal() {
  try {
    await ethereum.enable();
  	let groupe = document.getElementById('groupe').value;
  	let pseudo = document.getElementById('pseudo').value;
  	let token = document.getElementById('token').value;
  	await contractInstance.demander(groupe,pseudo,token);
  } catch(err) {
  console.error(err);
}
}

async function _fermetureCanal() {
  try {
    await ethereum.enable();
  	let pseudo = document.getElementById('pseudo').value;
  	await contractInstance.fermetureCanal(pseudo);
  } catch(err) {
  console.error(err);
}
}
