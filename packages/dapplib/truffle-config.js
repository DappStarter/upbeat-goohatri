require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift recipe sad unfair gesture phone olympic genuine'; 
let testAccounts = [
"0x18e8c98a950f63f8b36e613bda1afa36aa01fe1520699d49c5f8d8d60413724b",
"0xf19d9ea12c7617b2fef2ddea634345966d3fa98dd96a93dd0d301828524e2d6f",
"0x1687a8019cdfdc9c14b412d8dd28d4d83dcc10c98c61a33aeb8fda7396c37bd5",
"0xa7c80e118e155d198e36093f50043b1f2537e0f51bae6a2445a6aeba3e93bc85",
"0xf51c3766055aefd2016226398c5a149eb72b06cf90b80d9a2e39d2f12afd0131",
"0x4ff7220b55ea8c1706b94602050535fb3aadd5986cefae43cbf6aa426f01c2ac",
"0x66b63be4d2e9e5278fb3ef17924bb4eadfc93c01a85841b4e748e85ee14b8367",
"0xdf3c8327b3d7efd52baec73096b991510a5ccf8e910abb7a1dc232a9931cb6b3",
"0x671859ca4ff8f902b337c48132bc2705bf251776dbea29fae2f7e6237b18421f",
"0x9715b6e838a739dfcf69a88ee7b442c348178daf41957e9fc68d4f515aae3e05"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
