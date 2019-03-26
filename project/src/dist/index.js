const EtherUnion =
[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" }, { "name": "_token", "type": "uint256" } ], "name": "payerCanal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" } ], "name": "fermetureCanal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_montant", "type": "uint256" }, { "name": "_delai", "type": "uint256" }, { "name": "_pseudo", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_contrat", "type": "address" } ], "name": "demander", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_membre", "type": "address" }, { "name": "_groupe", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "ajouterMembre", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_nom", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "creerGroupe", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "constant": false, "inputs": [ { "name": "_maxGroups", "type": "uint256" } ], "name": "modifierMaxGroups", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxDelai", "type": "uint256" } ], "name": "modifierDelai", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxMembre", "type": "uint256" } ], "name": "modifierMaxMembre", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxAmount", "type": "uint256" } ], "name": "modifierMaxAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_minAmount", "type": "uint256" } ], "name": "modifierMinAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_priceChannel", "type": "uint256" } ], "name": "modifierPriceChannel", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getGroupesPerAddress", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_groupe", "type": "string" } ], "name": "getMembres", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomMembre", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getContratCible", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getMontant", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getBlockFermeture", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getEncours", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDonnations", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDescription", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomGroupe", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "groupe", "type": "string" } ], "name": "getOwnPseudo", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ];

let contractAddress = "0xd1138CeD1Cd57E37c79Fe013830026AcF9d1C686"
const provider = new ethers.providers.Web3Provider(ethereum)
let contractInstance = new ethers.Contract(contractAddress, EtherUnion, provider.getSigner())

async function demarrage() {
  _getGroupesPerAddress()
  _getOwnedGroupesPerAddress()
}

async function _getGroupesPerAddress() {
  try {
    let copy = []
    let list = await contractInstance.getGroupesPerAddress()
    for (i=0; i<list.length; i++){
      let group = await contractInstance.getNomGroupe(list[i])
      copy.push(group)
    }
    document.getElementById('getGroupesPerAddress').innerHTML = copy
  } catch(err) {
    console.error(err)
  }
}

async function _getOwnedGroupesPerAddress() {
  try {
    let copy = []
    let list = await contractInstance.getOwnedGroupe()
    for (i=0; i<list.length; i++){
      let group = await contractInstance.getNomGroupe(list[i])
      copy.push(group)
    }
    document.getElementById('getAdminGroups').innerHTML = copy
  } catch(err) {
    console.error(err)
  }
}

async function _getMembresGroupe() {
  try {
    let nomGroupe = document.getElementById('nomGroupe').value
    let copy = []
    let list = await contractInstance.getMembres(nomGroupe)
    for (i=0; i<list.length; i++){
      let group = await contractInstance.getNomMembre(list[i])
      copy.push(group)
    }
  document.getElementById('getMembres').innerHTML = copy
  document.getElementById('getMonPseudo').innerHTML = getOwnPseudo(nomGroupe)
  } catch(err) {
    console.error(err)
  }
}

async function _membreInfo() {
  try {
    let ID = document.getElementById('ID').value
    document.getElementById('getDescription').innerHTML = await contractInstance.getDescription(ID)
    document.getElementById('getDonnations').innerHTML = await contractInstance.getDonnations(ID)
    document.getElementById('getMontant').innerHTML = await contractInstance.getMontant(ID)
    document.getElementById('getEncours').innerHTML = await contractInstance.getEncours(ID)
    document.getElementById('getContrat').innerHTML = await contractInstance.getContratCible(ID)
    document.getElementById('getTime').innerHTML = await contractInstance.getTime(ID)
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
  	let pseudo = document.getElementById('pseudo1').value
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
  	let pseudo = document.getElementById('pseudo2').value
    let description = document.getElementById('description').value
  	await contractInstance.demander(montant,delai,pseudo,description, {value : 'avance'})
  } catch(err) {
    console.error(err)
  }
}

async function _payerCanal() {
  try {
    await ethereum.enable();
  	let pseudo = document.getElementById('pseudo3').value
  	let token = document.getElementById('token').value
  	await contractInstance.demander(pseudo,token, {value : 'proposition'})
  } catch(err) {
    console.error(err)
  }
}

async function _fermetureCanal() {
  try {
    await ethereum.enable()
  	let pseudo = document.getElementById('pseudo4').value
  	await contractInstance.fermetureCanal(pseudo)
  } catch(err) {
    console.error(err)
  }
}
