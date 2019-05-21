const Lotery = artifacts.require("Lotery");

module.exports = function(deployer) {
  deployer.deploy(Cagnotes, {gas : 4000000});
};
