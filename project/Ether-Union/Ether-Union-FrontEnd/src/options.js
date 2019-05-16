import { ethers } from 'ethers';
import Lottery from './ABIs/gameABI';

const contractAddress = "0xa244a02a49fd9adedeb7b5d49633be7fe5fb4fb2";
const provider = new ethers.getDefaultProvider('ropsten');
const contractInstance = new ethers.Contract(contractAddress, Lottery, provider);

export default contractInstance;
