const EtherUnion =
[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x06fdde03" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x095ea7b3" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" }, { "name": "_token", "type": "uint256" } ], "name": "payerCanal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function", "signature": "0x0eef04fd" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x18160ddd" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x23b872dd" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint32" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x313ce567" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x39509351" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" } ], "name": "fermetureCanal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x4dc88729" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x70a08231" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x8da5cb5b" }, { "constant": false, "inputs": [ { "name": "_membre", "type": "address" }, { "name": "_groupe", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "ajouterMembre", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x8f333341" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x95d89b41" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xa457c2d7" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xa9059cbb" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xdd62ed3e" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xf2fde38b" }, { "constant": false, "inputs": [ { "name": "_nom", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "creerGroupe", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xf4343df4" }, { "constant": false, "inputs": [ { "name": "_montant", "type": "uint256" }, { "name": "_delai", "type": "uint256" }, { "name": "_pseudo", "type": "string" }, { "name": "_description", "type": "string" } ], "name": "demander", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function", "signature": "0xfa8622f9" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event", "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event", "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event", "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925" }, { "constant": false, "inputs": [ { "name": "_maxGroups", "type": "uint256" } ], "name": "modifierMaxGroups", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xf420948b" }, { "constant": false, "inputs": [ { "name": "_maxDelai", "type": "uint256" } ], "name": "modifierDelai", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xe0c989c2" }, { "constant": false, "inputs": [ { "name": "_maxMembre", "type": "uint256" } ], "name": "modifierMaxMembre", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x1c064aa7" }, { "constant": false, "inputs": [ { "name": "_maxAmount", "type": "uint256" } ], "name": "modifierMaxAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xbeaf3b0d" }, { "constant": false, "inputs": [ { "name": "_minAmount", "type": "uint256" } ], "name": "modifierMinAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xf4839772" }, { "constant": false, "inputs": [ { "name": "_priceChannel", "type": "uint256" } ], "name": "modifierPriceChannel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x370c29f9" }, { "constant": true, "inputs": [], "name": "getGroupesPerAddress", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x1e0afe57" }, { "constant": true, "inputs": [ { "name": "_groupe", "type": "string" } ], "name": "getMembres", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x29c77347" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomMembre", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x4b7b03cf" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getMontant", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x750fa0a3" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getBlockFermeture", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xdf40e329" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getEncours", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x4c9a9850" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDonnations", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x27f128b3" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDescription", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x4925ec55" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomGroupe", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x41522997" } ]

let contractAddress = "0x70039E15e142FA228Ec13480D0EFCA7dae9D33Ff"
const provider = new ethers.providers.Web3Provider(ethereum)
let contractInstance = new ethers.Contract(contractAddress, EtherUnion, provider.getSigner())

async function demarrage() {
_getGroupesPerAddress()
}

async function _getGroupesPerAddress() {
try {
let copy = [];
let list = await contractInstance.getGroupesPerAddress()
for (i=0; i<list.length; i++){
let group = await contractInstance.getNomGroupe(list[i])
copy.push(group)
}
document.getElementById('getGroupesPerAddress').innerHTML = copy
} catch(err) {
  console.error(err);
}
}

async function _getMembresGroupe() {
try {
let nomGroupe = document.getElementById('nomGroupe').value
let copy = [];
let list = await contractInstance.getMembres(nomGroupe)
for (i=0; i<list.length; i++){
let group = await contractInstance.getNomMembre(list[i])
copy.push(group)
}
document.getElementById('getMembres').innerHTML = copy
} catch(err) {
  console.error(err);
}
}

async function _getDescription() {
try {
let ID = document.getElementById('ID').value
document.getElementById('getDescription').innerHTML = await contractInstance.getDescription(ID)
} catch(err) {
  console.error(err)
}
}

async function _getDonnations() {
try {
let ID = document.getElementById('ID').value
document.getElementById('getDonnations').innerHTML = await contractInstance.getDonnations(ID)
} catch(err) {
  console.error(err)
}
}

async function _getMontant() {
try {
let ID = document.getElementById('ID').value
document.getElementById('getMontant').innerHTML = await contractInstance.getMontant(ID)
} catch(err) {
  console.error(err)
}
}

async function _getEncours() {
try {
let ID = document.getElementById('ID').value
document.getElementById('getEncours').innerHTML = await contractInstance.getEncours(ID)
} catch(err) {
  console.error(err)
}
}

async function _creerGroupe() {
  try {
    await ethereum.enable()
  	let nom = document.getElementById('nom').value
  	let pseudo = document.getElementById('pseudo').value
  	await contractInstance.creerGroupe(nom,pseudo)
  } catch(err) {
  console.error(err)
}
}

async function _ajouterMembre() {
  try {
    await ethereum.enable()
  	let membre = document.getElementById('membre').value
  	let groupe = document.getElementById('groupe').value
  	let pseudo = document.getElementById('pseudo').value
  	await contractInstance.ajouterMembre(membre,groupe,pseudo)
  } catch(err) {
  console.error(err)
}
}

async function _demander() {
  try {
    await ethereum.enable()
  	let montant = document.getElementById('montant').value
  	let delai = document.getElementById('delai').value
  	let pseudo = document.getElementById('pseudo').value
    let description = document.getElementById('description').value
  	await contractInstance.demander(montant,delai,pseudo,description)
  } catch(err) {
  console.error(err)
}
}

async function _payerCanal() {
  try {
    await ethereum.enable();
  	let pseudo = document.getElementById('pseudo').value
  	let token = document.getElementById('token').value
  	await contractInstance.demander(pseudo,token)
  } catch(err) {
  console.error(err)
}
}

async function _fermetureCanal() {
  try {
    await ethereum.enable()
  	let pseudo = document.getElementById('pseudo').value
  	await contractInstance.fermetureCanal(pseudo)
  } catch(err) {
  console.error(err)
}
}
