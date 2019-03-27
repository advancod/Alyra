const EtherUnion =

let contractAddress = "0x83b158d2EA5E694B4BF429a4243572Af0860690b"
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
  document.getElementById('getMonPseudo').innerHTML = getPseudoInGroup(nomGroupe)
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
  	await contractInstance.demander(montant,delai,pseudo,description)
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
