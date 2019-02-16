var Migrations = artifacts.require("./jeuCarte.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
