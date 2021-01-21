var LiarsGame = artifacts.require("./LiarsGame.sol");
module.exports = function(deployer) {
  deployer.deploy(LiarsGame, 30);
};
