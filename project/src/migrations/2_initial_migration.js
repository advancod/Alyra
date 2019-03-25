const Main = artifacts.require("Main");

module.exports = function(deployer) {
  deployer.deploy(Main, {gas : 5000000});
};
