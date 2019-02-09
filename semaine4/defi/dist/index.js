const abiIllustrations = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			},
			{
				"name": "_postulant",
				"type": "address"
			}
		],
		"name": "accepterOffre",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_remuneration",
				"type": "uint256"
			},
			{
				"name": "_delai",
				"type": "uint256"
			},
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_reputationMinimum",
				"type": "uint256"
			}
		],
		"name": "ajouterDemande",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addresse",
				"type": "address"
			}
		],
		"name": "bannissement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			}
		],
		"name": "debloquerFonds",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_nom",
				"type": "string"
			}
		],
		"name": "inscription",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_hash",
				"type": "bytes32"
			},
			{
				"name": "_IDdemande",
				"type": "uint256"
			}
		],
		"name": "livraison",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			}
		],
		"name": "payerDemande",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			}
		],
		"name": "paymentIllustrateur",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			}
		],
		"name": "postuler",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			},
			{
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "validation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addresseIllustrateur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "addressedemandeur",
				"type": "address"
			}
		],
		"name": "challengeAccepte",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addresseIllustrateur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "addressedemandeur",
				"type": "address"
			}
		],
		"name": "dessinLivre",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addresseIllustrateur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "addressedemandeur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "reputationActuelle",
				"type": "uint256"
			}
		],
		"name": "dessinValide",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addresseIllustrateur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "addressedemandeur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "reputationActuelle",
				"type": "uint256"
			}
		],
		"name": "dessinRejete",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addresseIllustrateur",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "addressedemandeur",
				"type": "address"
			}
		],
		"name": "challengeAnnule",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addressBanished",
				"type": "address"
			}
		],
		"name": "bannishement",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "addressesBannies",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "affectations",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_IDdemande",
				"type": "uint256"
			}
		],
		"name": "afficherDemande",
		"outputs": [
			{
				"components": [
					{
						"name": "emetteur",
						"type": "address"
					},
					{
						"name": "remuneration",
						"type": "uint256"
					},
					{
						"name": "delai",
						"type": "uint256"
					},
					{
						"name": "description",
						"type": "string"
					},
					{
						"name": "reputationMinimum",
						"type": "uint256"
					},
					{
						"name": "status",
						"type": "uint8"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "appelOffres",
		"outputs": [
			{
				"name": "emetteur",
				"type": "address"
			},
			{
				"name": "remuneration",
				"type": "uint256"
			},
			{
				"name": "delai",
				"type": "uint256"
			},
			{
				"name": "description",
				"type": "string"
			},
			{
				"name": "reputationMinimum",
				"type": "uint256"
			},
			{
				"name": "status",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidat",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contractualisation",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "demandeur",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addresse",
				"type": "address"
			}
		],
		"name": "getReputation",
		"outputs": [
			{
				"components": [
					{
						"name": "nom",
						"type": "string"
					},
					{
						"name": "reputation",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "locked",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "proposition",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "reputations",
		"outputs": [
			{
				"name": "nom",
				"type": "string"
			},
			{
				"name": "reputation",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];


async function enableMetaMask() {
if (ethereum) {
  try {
    const [ address ] = await ethereum.enable();
    return address;
  } catch (err) {
    throw err;
  }
} else {
  alert('This super awesome app need MetaMask to work. Install it and come back');
  throw new Error('Ethereum is not available here');
}
}
async function createMetaMaskDapp() {
try {
  const address = await enableMetaMask();
  const provider = new ethers.providers.Web3Provider(ethereum);

  let contractWrite = new ethers.Contract("", abiIllustrations, provider.getSigner());

  let hash = await contractWrite.produireHash("https://github.com/advancod/Alyra/blob/master/semaine4/devoirs/exercice4.2.1/index.js");
  console.log(hash);
  let devoir = await contractWrite.getListeIllustrateurs();
  console.log(devoir);
	document.getElementById('MyCredits').innerHTML = credits;
  let credits = await contractWrite.cred("0xcfe40ea57389d79b7679eda66059ecb30167e31c");
  console.log(credits);


} catch(err) {

  console.error(err);

}

}
