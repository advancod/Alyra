const Cagnottes = artifacts.require("Lottery");

module.exports = function(deployer) {
  deployer.deploy(Cagnottes, {gas : 6000000});
};
