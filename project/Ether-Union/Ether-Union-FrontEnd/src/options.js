import { ethers } from 'ethers';
import Lottery from './ABIs/gameABI';

const contractAddress = "0x8c3ca1a4296f52d956e8bc71ccf7d96efee434bb";
var provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lottery, signer);

export default contractInstance;
