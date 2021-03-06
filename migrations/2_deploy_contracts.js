
// var RepublicToken = artifacts.require("RepublicToken.sol");
// var DarkNodeRegistry = artifacts.require("DarkNodeRegistry.sol");
// var TraderRegistry = artifacts.require("TraderRegistry.sol");
var Gateway = artifacts.require("Gateway.sol");
var LinkedList = artifacts.require("LinkedListTest.sol");
// var Utils = artifacts.require("Utils.sol");
var Config = require("../republic-config");

module.exports = function (deployer) {
  // deployer.deploy(Utils);
  // deployer.link(Utils, [DarkNodeRegistry, TraderRegistry]);
  deployer.deploy(Gateway, "0x261c74f7dd1ed6a069e18375ab2bee9afcb10956", "0x42a990655bffe188c9823a2f914641a32dcbb1b2", "0x8c98238c9823842a99018a2f914641a32dcbb1b2", 5);
  deployer.deploy(LinkedList);
  // return deployer.deploy(RepublicToken).then(() => {
  //   deployer.link(RepublicToken, [DarkNodeRegistry, TraderRegistry]);
  //   return deployer.deploy(DarkNodeRegistry, RepublicToken.address, Config.bondMinimum, Config.epochInterval).then(() => {
  //     return deployer.deploy(TraderRegistry, RepublicToken.address, Config.bondMinimum)
  //   })
  // });
};