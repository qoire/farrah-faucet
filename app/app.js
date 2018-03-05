const Web3 = require('aion-web3');
const app = require('express')();

// initialize web3 client to local node
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get('/api/process_full', (req, res) => {
  res.send(JSON.stringify({"full": true}));
});

app.get('/api/send', (req, res) => {

});