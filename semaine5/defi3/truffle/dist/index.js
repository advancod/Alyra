const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "pin",
        "type": "bytes32"
      }
    ],
    "name": "Epingler",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "pinUrl",
        "type": "bytes32"
      }
    ],
    "name": "payerStockage",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
]

const ethers = require('ethers')
const Ipfs= require('ipfs')

const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")
const contract = new ethers.Contract("0x49493BF7eBC44bfF5B2Dd877768d3056eA7eA431", abi, provider.getSigner());

const node = new Ipfs()

node.on('ready', () => {
 console.log("IPFS prêt")
 provider.getNetwork().then(
   r =>  console.log("Ethereum connecté sur ", r)
 )
})
contract.on("Epingler", (HASH, event) =>{
console.log(ipfs.pin.add(HASH))
});
