require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million property grace local bridge truck'; 
let testAccounts = [
"0x1a4b645b7ef2f6bb7a289e5164db8d2e1958f9a4e261d54344be3dbc572ee0ce",
"0xe3135aaeb481863df5198cda2a03b01801e50f434c2a0c95cff5e8a09728c767",
"0xf452136c598c2e6c1fe6bb308a35da9bdac91dda223e2136cc03fb5aa62f62dd",
"0xffe4975eafd4515d57e96260bafd156820e6c079ed1b394f3db76611d99f7ff8",
"0x632086a288c158293116d88ef9abc7da182a0e18ccf577016b24ba494f85b9db",
"0xe110906cea952bd7dea3e8f424c0c0a24846517953380971b54afd9b0d82c39b",
"0xba582b3641e94a317ee5660b3d663ee39ae560868ae94dbfba1748b1abe24988",
"0x9d4eeddf2a75f8a6beff0ecd036f7896f0aaca4f0a301566aafddca56b2a4a94",
"0x4e9cc4168719300a0091935177b497c896b7c413a9aceaacf5f7e4028d7fc766",
"0xe60c59896909e33007d5cfbd2900d0c0ed3c5709567b256ef4bfba72133a7491"
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
            version: '^0.8.0'
        }
    }
};

