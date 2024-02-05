//This function is use to verify the contract on testnet or mainnet
const { run } = require("hardhat");

const verify = async (contractAddress, args) => {
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Contract Already Verified");
    } else {
      console.error(e);
    }
  }
};

module.exports = { verify };
// verify("0x5bb6622dAb31575384f7d13f6aBDF6e17b1be8FB", []);
