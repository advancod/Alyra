const Cagnottes = artifacts.require("Cagnottes");

module.exports = function(deployer) {
  deployer.deploy(Cagnottes, {gas : 5000000});
};
