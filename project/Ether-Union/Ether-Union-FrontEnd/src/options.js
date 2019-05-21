import { ethers } from 'ethers';
import Lotery from './ABIs/gameABI';

const contractAddress = "0xf490287dc792db6a2a65b519847f7bb6173c0bed";
//var provider = new ethers.providers.Web3Provider(window.ethereum);
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lotery, signer);

export default contractInstance;
