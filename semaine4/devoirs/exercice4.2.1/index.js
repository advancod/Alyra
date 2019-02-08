let abiCred = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "dev",
				"type": "bytes32"
			}
		],
		"name": "remettre",
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
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "cred",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "dd",
				"type": "string"
			}
		],
		"name": "produireHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "destinataire",
				"type": "address"
			},
			{
				"name": "valeur",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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
  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);
  document.getElementById('blockNumber').innerHTML = blockNumber;
  const gasPrice = await provider.getGasPrice();
  const gasPriceString = gasPrice.toString();
  console.log(gasPriceString);
  document.getElementById('gas').innerHTML = gasPriceString;

  let contractWrite = new ethers.Contract("0x451875bdd0e524882550ec1ce52bcc4d0ff90eae", abiCred, provider.getSigner());

  let hash = await contractWrite.produireHash("0x451875bdd0e524882550ec1ce52bcc4d0ff90eae");




} catch(err) {

  console.error(err);

}

}
