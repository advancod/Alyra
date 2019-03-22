import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import getWeb3 from './libs/getWeb3'
import getContract from './libs/getContract'

// import drizzle functions and contract artifact
import { Drizzle, generateStore } from "drizzle";
import Cagnottes from "./contracts/Cagnottes.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [Cagnottes],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://ropsten.infura.io:8545",
      network_id: "3",
    },
  },
};
// setup the drizzle store and drizzle
const drizzle = new Drizzle(options);

var contractConfig = {
  contractName: "0x066408929e8d5Ed161e9cAA1876b60e1fBB5DB75",
}

this.context.drizzle.addContract(contractConfig)

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));
