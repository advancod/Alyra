const EtherUnion = artifacts.require("EtherUnion");

module.exports = function(deployer) {
  deployer.deploy(EtherUnion, {gas : 5000000});
};
