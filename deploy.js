const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const { interface,bytecode } = require ('./compile');
<<<<<<< HEAD
const walletProvider = require('./HDWalletProvider');

console.log (walletProvider.providerString()[0]+ ', ' + walletProvider.providerString()[1]);
const provider = new HDWalletProvider (walletProvider.providerString()[0],walletProvider.providerString()[1]);
=======


>>>>>>> 0d202efc5f3ba7cd33411ee375c38418d64a2b82

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

<<<<<<< HEAD
    console.log('Attempting to deply from account', accounts[0]);
=======
    console.log('Attempting to deply from acocunt', accounts[0]);
>>>>>>> 0d202efc5f3ba7cd33411ee375c38418d64a2b82

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0]});

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();
