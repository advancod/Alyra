import { ethers } from 'ethers';
import Lotery from './ABIs/gameABI';

const contractAddress = "0x08b216551197f120bc84f7e1b79cf266d3660844";
//var provider = new ethers.providers.Web3Provider(window.ethereum);
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lotery, signer);

export default contractInstance;
