require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.21",
  networks: {
    localhost: {
      url: "http://127.0.0.1:7545", // если Ganache на 7545
    },
  },
};
