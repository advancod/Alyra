import { ethers } from 'ethers';
import Lottery from './ABIs/gameABI';

const contractAddress = "0xda81896538c795836fb68b9b9de47eb6e6b82e21";
const provider = new ethers.getDefaultProvider('ropsten');
const contractInstance = new ethers.Contract(contractAddress, Lottery, provider);

export default contractInstance;
