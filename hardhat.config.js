/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-contract-sizer");

const HOLESKY_RPC_URL = process.env.HOLESKY_RPC_URL;
const HOLESKY_PRIVATE_KEY = process.env.HOLESKY_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.17",

  networks: {
    holesky: {
      url: HOLESKY_RPC_URL,
      accounts: [HOLESKY_PRIVATE_KEY],
      chainId: 17000,
      blockconfirmations: 4,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
    account2: {
      default: 1,
    },
  },

  etherscan: {
    apiKey: {
      holesky: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "holesky",
        chainId: 17000,
        urls: {
          apiURL: "https://api-holesky.etherscan.io/api",
          browserURL: "https://holesky.etherscan.io/",
        },
      },
    ],
  },

  gasReporter: {
    enabled: true,
  },

  mocha: {
    timeout: 200000, // 200sec
  },
};
