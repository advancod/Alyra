var abi = require("./gameABI");

let contractAddress = "0x9b19088c54df4822344457a4ce148dce13f192f7"
const provider = new ethers.providers.Web3Provider(ethereum)
let contractInstance = new ethers.Contract(contractAddress, abi.Lottery, provider.getSigner())


async function demarrage() {
  _getGroupesPerAddress()
  _getOwnedGroupesPerAddress()
  _lotteryInfo()
}

async function _lotteryInfo() {
  document.getElementById('getPrixLottery').innerHTML = await contractInstance.getPrixLottery()
  document.getElementById('getSuperCagnotte').innerHTML = await contractInstance.getSuperCagnotte()
  document.getElementById('getTicketsLeft').innerHTML = await contractInstance.getTicketsLeft()
  document.getElementById('getEndGame').innerHTML = await contractInstance.getEndGame()
  document.getElementById('getBlockStop').innerHTML = await contractInstance.getBlockStop()

  document.getElementById('getNumCagnotte').innerHTML = await contractInstance.getNumCagnotte()
  document.getElementById('getCagnotte').innerHTML = await contractInstance.getCagnotte()
  document.getElementById('getNbGagnants').innerHTML = await contractInstance.getNbGagnants()
}

async function _getGroupesPerAddress() {
    let copy = []
    let list = await contractInstance.getGroupesPerAddress()
    for (i=0; i<list.length; i++){
      let group = await contractInstance.getNomGroupe(list[i])
      copy.push(group)
    }
    document.getElementById('getGroupesPerAddress').innerHTML = copy
}

async function _getOwnedGroupesPerAddress() {
    let copy = []
    let list = await contractInstance.getOwnedGroupe()
    for (i=0; i<list.length; i++){
      let group = await contractInstance.getNomGroupe(list[i])
      copy.push(group)
    }
    document.getElementById('getAdminGroups').innerHTML = copy
}

async function _getMembresGroupe() {
    let nomGroupe = document.getElementById('nomGroupe').value
    let copy = []
    let list = await contractInstance.getMembres(nomGroupe)
    for (i=0; i<list.length; i++){
      let group = await contractInstance.getNomMembre(list[i])
      copy.push(group)
    }
  document.getElementById('getMembres').innerHTML = copy
  document.getElementById('getMonPseudo').innerHTML =  await contractInstance.getPseudoInGroup(nomGroupe)
}

async function _membreInfo() {
    let pseudo = document.getElementById('pseudo6').value
    document.getElementById('getContratCible').innerHTML = await contractInstance.getContratCible(pseudo)
    document.getElementById('getMontant').innerHTML = await contractInstance.getMontant(pseudo)
    document.getElementById('getEncours').innerHTML = await contractInstance.getEncours(pseudo)
    document.getElementById('getReceptions').innerHTML = await contractInstance.getReceptions(pseudo)
    document.getElementById('getDonnations').innerHTML = await contractInstance.getDonnations(pseudo)
    document.getElementById('getGroupe').innerHTML = await contractInstance.getGroupe(pseudo)
    document.getElementById('getDescription').innerHTML = await contractInstance.getDescription(pseudo)
    document.getElementById('getMembre').innerHTML = pseudo
}

async function _creerGroupe() {
    await ethereum.enable()
  	let nom = document.getElementById('nom').value
  	let pseudo = document.getElementById('pseudo').value
  	await contractInstance.creerGroupe(nom,pseudo, {value : contractInstance.getPriceGroup()})
}

async function _ajouterMembre() {
    await ethereum.enable()
  	let membre = document.getElementById('membre').value
  	let groupe = document.getElementById('groupe').value
  	let pseudo = document.getElementById('pseudo1').value
  	await contractInstance.ajouterMembre(membre,groupe,pseudo, {value : contractInstance.getPriceMember()})
}

async function _demander() {
    await ethereum.enable()
  	let montant = document.getElementById('montant').value
  	let pseudo = document.getElementById('pseudo2').value
    let contrat = document.getElementById('contrat').value
    let description = document.getElementById('description').value
  	await contractInstance.demander(montant,pseudo,contrat,description, {value : contractInstance.getPriceChannel()})
}

async function _payerCanal() {
    await ethereum.enable()
  	let pseudo = document.getElementById('pseudo3').value
    let proposition = document.getElementById('proposition').value
  	await contractInstance.payerCanal(pseudo, {value : parseInt(proposition,10)})
}

async function _fermetureCanal() {
    await ethereum.enable()
  	let pseudo = document.getElementById('pseudo4').value
  	await contractInstance.fermetureCanal(pseudo)
}

async function _jouerLottery() {
    await ethereum.enable()
    let prediction = document.getElementById('prediction').value
    let quantite = document.getElementById('quantite').value
  	await contractInstance.play(prediction,quantite)
}

async function _withdrawGains() {
    await ethereum.enable()
  	await contractInstance.withdrawGains()
}
