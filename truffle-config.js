const path = require('path');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_directory: path.join(__dirname, '/src/blockchain/contracts'),
  contracts_build_directory: path.join(__dirname, '/build/blockchain/contracts'),
  migrations_directory: path.join(__dirname, '/src/blockchain/migrations'),
  migrations_build_directory: path.join(__dirname, '/build/blockchain/migrations'),
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
  },
};
