import { ethers } from 'ethers';
import Lotery from './ABIs/gameABI';

const contractAddress = "0x96ac6db379f384c16c9d64612169e20af715e422";
//var provider = new ethers.providers.Web3Provider(window.ethereum);
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lotery, signer);

export default contractInstance;
