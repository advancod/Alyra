import Web3 from 'web3'
import classifiedAdsContractData from '../assets/contracts/ClassifiedAds.json'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)

  let classifiedAdsContract = web3.eth.contract(classifiedAdsContractData.abi)
  let classifiedAdsContractInstance = classifiedAdsContract.at(classifiedAdsContractData.networks[web3.currentProvider.networkVersion].address)
  // casinoContractInstance = () => casinoContractInstance
  resolve(classifiedAdsContractInstance)
})
export default getContract
