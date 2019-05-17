import { ethers } from 'ethers';
import Lottery from './ABIs/gameABI';

const contractAddress = "0x002a1354b803ac12170fa827c3e3f4ec07c35b20";
const provider = new ethers.getDefaultProvider('ropsten');
const contractInstance = new ethers.Contract(contractAddress, Lottery, provider.getSigner(0));

export default contractInstance;
