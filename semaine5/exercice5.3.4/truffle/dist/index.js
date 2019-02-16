// ABI contract
const abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
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
        "name": "ID",
        "type": "uint256"
      }
    ],
    "name": "recupererCarte",
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
    "name": "listCartes",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
],

let contractAddress = "0xaf2451c3ce6fc6bef72ba5140ba3559744f377d3";
const provider = new ethers.providers.Web3Provider(ethereum);
let contractWrite = new ethers.Contract(contractAddress, abi, provider.getSigner());

const node = new Ipfs({ repo: 'ipfs-' + Math.random() });
node.once('ready', () => {
	node.id(function (err, id) {
		if (err) {
			throw err;
		}
		console.log("connecté, id : ", id);
	});
})

async function _getListeImages() {
try {
document.getElementById('getListeImages').innerHTML = await contractWrite.listCartes();
} catch(err) {
  console.error(err);
}

async function _getImage() {
try {
  let image = document.getElementById("getImage").value;
  let resultat = await contractWrite.recupererCarte(image);
  node.cat(resultat, function (err,file) {
      if (err) {
        throw err;
      }
      document.getElementById("result").src = "data:image/jpg;base64," + file.toString('base64');
  });
  }
} catch(err) {
  console.error(err);
}

async function _ajouterImage() {
try {
  await ethereum.enable();
  let carte = document.getElementById("ajouterImage").files[0];
  const reader = new FileReader();
  reader.readAsArrayBuffer(carte);
  reader.onloadend = function() {
    node.add(new node.types.Buffer.from(reader.result)).then(r =>{
      contractWrite.ajouterCarte(r[0].hash);
    })
  }
  }
