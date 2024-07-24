require("@nomicfoundation/hardhat-toolbox");
const PRIVATE_KEY = "434baadec3278e33fe33b98473c3ad126134292cfe430b12afc44846c43f6773";

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${PRIVATE_KEY}`],
    }
  
  },
};