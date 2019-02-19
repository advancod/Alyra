const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "s",
				"type": "string"
			}
		],
		"name": "ajouterCarte",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "ind",
				"type": "uint256"
			}
		],
		"name": "recuperer",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "toutRecuperer",
		"outputs": [
			{
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const provider = new ethers.providers.Web3Provider(ethereum);
const addresses =  ethereum.enable();
const address = addresses[0]
const dapp = { address, provider };
const collectionCard = new ethers.Contract("0x1b6e533f7f127526b119a38b8640d7d5a3946f44", abi, dapp.provider.getSigner());
console.log(dapp);

const node = new Ipfs({ repo: 'ipfs-' + Math.random() });
node.once('ready', () => {
	node.id(function (err, id) {
		if (err) {
			throw err;
		}
		console.log("connecté, id : ", id);
	});
})

// Ajouter une image
function addImg() {
	let image = document.getElementById("fichierImage").files[0];
	const reader = new FileReader();
	reader.readAsArrayBuffer(image);
	reader.onloadend = function() {
		node.add(new node.types.Buffer.from(reader.result)).then(r =>{
			let rs = collectionCard.ajouterCarte(r[0].hash);
			console.log(rs);
		})
	}
}

// Afficher une image grace à son index
async function recupImg(index) {
	index = document.getElementById("index").value;
	console.log(index);
	let resultat = await collectionCard.recuperer(index);
	console.log(resultat,"resultat");
	node.cat(resultat, function (err,file) {
  		if (err) {
    		throw err;
  		}
  		console.log(file.toString('utf8'));
  		document.getElementById("imageRecup").src = "data:image/jpg;base64," + file.toString('base64');
	});
}
