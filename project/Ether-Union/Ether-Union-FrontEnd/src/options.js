import { ethers } from 'ethers';
import Lotery from './ABIs/gameABI';

const contractAddress = "0xc47f12f81e0cc5f44ac4ba59f765d6d3a7b6b369";
//var provider = new ethers.providers.Web3Provider(window.ethereum);
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lotery, signer);

export default contractInstance;
