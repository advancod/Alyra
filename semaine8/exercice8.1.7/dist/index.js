const abiIllustrations =
[];

let contractAddress = "";
const provider = new ethers.providers.Web3Provider(ethereum);
let contractWrite = new ethers.Contract(contractAddress, abiIllustrations, provider.getSigner());

async function _ajouterDemande() {
try {
  await ethereum.enable();
	let Montant = document.getElementById('Montant').value;
	let Delai = document.getElementById('Delai').value;
	let Description = document.getElementById('Description').value;
	await contractWrite.creerCanal('Mon groupe',Montant,Delai,'germain',Description);
} catch(err) {
  console.error(err);
}
}

}
