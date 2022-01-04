//metamask https://eth-ropsten.alchemyapi.io/v2/UMamTclmzHv5G6g-xV0RspTv5XbgsdyF

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/UMamTclmzHv5G6g-xV0RspTv5XbgsdyF",
      accounts: [ "f89e6ec32cbdb9cb41b1dc4b8aa0d48cee5b8d308b4151029241a41c04a271a5" ],
    },
  },
};
