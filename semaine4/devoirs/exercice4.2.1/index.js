async function enableMetaMask() {
if (ethereum) {
  try {
    const [ address ] = await ethereum.enable();
    return address;
  } catch (err) {
    throw err;
  }
} else {
  alert('This super awesome app need MetaMask to work. Install it and come back');
  throw new Error('Ethereum is not available here');
}
}
async function createMetaMaskDapp() {
try {
  const address = await enableMetaMask();
  const provider = new ethers.providers.Web3Provider(ethereum);
  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);
  document.getElementById('blockNumber').innerHTML = blockNumber;
  const gasPrice = await provider.getGasPrice();
  const gasPriceString = gasPrice.toString();
  console.log(gasPriceString);
  document.getElementById('gas').innerHTML = gasPriceString;
} catch(err) {

  console.error(err);

}

}
