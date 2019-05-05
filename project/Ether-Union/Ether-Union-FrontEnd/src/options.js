import { ethers } from 'ethers';
import Lottery from './ABIs/gameABI';

const contractAddress = "0x03384ac0049f18e9bc2199edbb8f037fc99bd7b2";
const provider = new ethers.getDefaultProvider('ropsten');
const contractInstance = new ethers.Contract(contractAddress, Lottery, provider);

export default contractInstance;
