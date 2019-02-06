async function createMetaMaskDapp(){

    const addresses = await ethereum.enable();
 
    //Creat ethers
    const provider = new ethers.providers.Web3Provider(ethereum);
    console.log({provider});
 
    // Get Block Number
 
    const BlockNumber = await provider.getBlockNumber();
    console.log(BlockNumber);
 
    // Get Balance
    const balance = await provider.getBalance(addresses[0]);
    let etherString = ethers.utils.formatEther(balance);
    console.log("balance: " + etherString);
 
    // Gaz
    const gaz = await provider.getGasPrice();
    console.log(gaz);

    let abi= [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "string"
                }
            ],
            "name": "setName",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_name",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "nom1",
                    "type": "string"
                }
            ],
            "name": "change",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];

    let contractWrite = new ethers.Contract("0x49493bf7ebc44bff5b2dd877768d3056ea7ea431", abi, provider.getSigner());
    contractWrite.on ( "change" , (name, event) => console.log("ralmalalala") )  ;
    let transfert = await contractWrite.setName("antho");

   


}