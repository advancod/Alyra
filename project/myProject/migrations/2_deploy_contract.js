const Cagnottes  = artifacts.require("./Cagnottes.sol");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(Cagnottes,10,10,10,10)
};
