const { ethers, network } = require("hardhat");
const { devlopmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async function main({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  // const args = ["Flat", "FT"]
  const args = [];
  const tokenNft = await deploy("TokenNft", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockconfirmations || 1,
  });

  console.log(`contract address : ${tokenNft.address} || deployer : ${deployer}`);

  if (!devlopmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    log("Verifying......");
    await verify(tokenNft.address, args);
  }
};
