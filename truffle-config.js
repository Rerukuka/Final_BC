module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Локальный хост для Ganache
      port: 7545,            // Порт Ganache (проверь, чтобы совпадал)
      network_id: "*",       // Подходит для всех сетей
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.21",     // Совпадает с используемой версией Solidity
    }
  },

  // db: {
  //   enabled: false
  // }
};
