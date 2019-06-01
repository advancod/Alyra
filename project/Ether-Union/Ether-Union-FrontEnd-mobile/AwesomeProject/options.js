import 'ethers/dist/shims.js';
import { ethers } from 'ethers';
import React, { Component } from 'react';
import {
    es,     // Spanish
    fr,     // French
    it,     // Italian
    ja,     // Japanese
    ko,     // Korean
    zh_ch,  // Chinese (simplified)
    zh_tw   // Chinese (tranditional)
} from 'ethers/wordlists';
import Lotery from './ABIs/gameABI';

const contractAddress = "0x08b216551197f120bc84f7e1b79cf266d3660844";
var provider = new ethers.providers.Web3Provider(window.ethereum);

let signer = provider.getSigner();
let contractInstance = new ethers.Contract(contractAddress, Lotery, signer);

export default contractInstance;
