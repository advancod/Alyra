import { ethers } from 'ethers';
import Lotery from './ABIs/gameABI';

const contractAddress = "0xce12cf0ff1b71d1f1b88e7d7e33d61a2235328ae";
//var provider = new ethers.providers.Web3Provider(window.ethereum);
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lotery, signer);

export default contractInstance;
