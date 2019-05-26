const Lotery = artifacts.require("Lotery");

module.exports = function(deployer) {
  deployer.deploy(Lotery, {gas : 6000000});
};
