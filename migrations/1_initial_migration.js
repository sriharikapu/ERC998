const Migrations = artifacts.require("_0xERC9981155");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
