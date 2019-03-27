const Cagnottes = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TOKEN_BONUS", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "LAPS_TIME_TOKEN_WITHDRAW", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PRICE_RATIO", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PRICE_GROUP", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TIME_TOKEN_WITHDRAW", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DESERVERVE_BONUS", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "spender", "type": "address" }, { "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "to", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "PRICE_MEMBRE", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_AMOUNT", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "owner", "type": "address" }, { "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MIN_AMOUNT", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_DELAI", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PRICE_CHANNEL", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "constant": false, "inputs": [ { "name": "_nom", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "creerGroupe", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_membre", "type": "address" }, { "name": "_groupe", "type": "string" }, { "name": "_pseudo", "type": "string" } ], "name": "ajouterMembre", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_montant", "type": "uint256" }, { "name": "_delai", "type": "uint256" }, { "name": "_pseudo", "type": "string" }, { "name": "_description", "type": "string" }, { "name": "_contrat", "type": "address" } ], "name": "demander", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" }, { "name": "_address", "type": "address" } ], "name": "payerCanal", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_pseudo", "type": "string" } ], "name": "fermetureCanal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_amount", "type": "uint256" } ], "name": "withdrawEther", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "tokenToEther", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_seuil", "type": "uint256" } ], "name": "modifierMeriteBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_tokenBonus", "type": "uint256" } ], "name": "modifierTokenBonus", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_laspsTime", "type": "uint256" } ], "name": "modifierLapsTimeToWithdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_TimeToWithdraw", "type": "uint256" } ], "name": "modifierTimeToWithdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxDelai", "type": "uint256" } ], "name": "modifierDelai", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_maxAmount", "type": "uint256" } ], "name": "modifierMaxAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_minAmount", "type": "uint256" } ], "name": "modifierMinAmount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_priceChannel", "type": "uint256" } ], "name": "modifierCharges", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_priceGroup", "type": "uint256" } ], "name": "modifierPriceGroup", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_priceMember", "type": "uint256" } ], "name": "modifierPriceMember", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_priceDemand", "type": "uint256" } ], "name": "modifierPriceDemand", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getGroupesPerAddress", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_groupe", "type": "string" } ], "name": "getMembres", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomMembre", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getContratCible", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getMontant", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getBlockFermeture", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getEncours", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDonnations", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getDemandeur", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getReceptions", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getTime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_ID", "type": "uint256" } ], "name": "getNomGroupe", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwnedGroupe", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_groupe", "type": "string" }, { "name": "_address", "type": "address" } ], "name": "getPseudoInGroup", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ]

let contractAddress = "0x8e26d07fc985c578e22f50f7ac82cb21deeed575"
const provider = new ethers.providers.Web3Provider(ethereum)
let contractInstance = new ethers.Contract(contractAddress, Cagnottes, provider.getSigner())

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
  document.getElementById('getMonPseudo').innerHTML =  await contractInstance.getPseudoInGroup(nomGroupe,)
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
    document.getElementById('getDemandeur').innerHTML = await contractInstance.getDemandeur(ID)
    document.getElementById('getReceptions').innerHTML = await contractInstance.getReceptions(ID)
    document.getElementById('getGroupe').innerHTML = await contractInstance.getGroupe(ID)
    document.getElementById('getMembre').innerHTML = await contractInstance.getMembre(ID)
  } catch(err) {
    console.error(err)
  }
}

async function _creerGroupe() {
  try {
    await ethereum.enable()
  	let nom = document.getElementById('nom').value
  	let pseudo = document.getElementById('pseudo').value
  	await contractInstance.creerGroupe(nom,pseudo, {value : 100})
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
  	await contractInstance.ajouterMembre(membre,groupe,pseudo, {value : 10})
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
  	await contractInstance.demander(montant,delai,pseudo,description, {value : 1})
  } catch(err) {
    console.error(err)
  }
}

async function _payerCanal() {
  try {
    await ethereum.enable();
  	let pseudo = document.getElementById('pseudo3').value
    let address = document.getElementById('address2').value
  	await contractInstance.demander(pseudo, address, {value : 'proposition'})
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

async function _tokenToEther() {
  try {
    await ethereum.enable()
    await contractInstance.tokenToEther()
  } catch(err) {
    console.error(err)
  }
}
