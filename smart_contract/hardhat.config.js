//metamask https://eth-ropsten.alchemyapi.io/v2/UMamTclmzHv5G6g-xV0RspTv5XbgsdyF

require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const { METAMASK_PRIVATE_KEY, HTTP_ALCHEMY_API_URL } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: HTTP_ALCHEMY_API_URL,
      accounts: [ METAMASK_PRIVATE_KEY ],
    },
  },
};
