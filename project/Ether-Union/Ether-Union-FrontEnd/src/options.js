import { ethers } from 'ethers';
import Lottery from './ABIs/gameABI';

const contractAddress = "0xc754e24171f938ba8be3dab49bfeb48bcd4dbda8";
//var provider = new ethers.providers.Web3Provider(window.ethereum);
let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lottery, signer);

export default contractInstance;
