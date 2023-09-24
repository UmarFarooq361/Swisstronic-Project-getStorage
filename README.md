This repository provides a simple example of how to interact with smart contracts on the Swisstronik blockchain using JavaScript and the SwisstronikJS library. Swisstronik is a blockchain platform that enhances the privacy and confidentiality of transaction data and smart contracts.

## Prerequisites
Before you start, ensure you have the following:
- Node.js and npm installed on your machine.
- An active Swisstronik account and access to a Swisstronik node's JSON-RPC endpoint.
## Getting Started
1. Clone this repository:
   ```
   git clone https://github.com/UmarFarooq361/Swisstronic-Project-getStorage.git
   ```
2. Install project dependencies:

   ```
   npm install
   ```
   Make sure you have installed SwisstronikJS by running
   ```
   npm i @swisstronik/swisstronik.js
   ```
4. Configure `hardhat.config.js`:

   Open the `hardhat.config.js` file and configure the Swisstronik network with your JSON-RPC endpoint URL  https://json-rpc.testnet.swisstronik.com/ and Ethereum account private key.

5. Write and Compile Smart Contract:
   - Compile the smart contract by running:
     ```
     npx hardhat compile
     ```
6. Deploy Smart Contract:
   - Deploy the contract by running:
     ```
     npx hardhat run scripts/deploy.js --network swisstronik
     ```
7. Interact with Smart Contract:
   - Run the setMessage scripts to interact with the contract.
     ```
     npx hardhat run scripts/setMessage.js --network swisstronik
     ```
     - Run the getMessage scripts to interact with the contract.
     ```
     npx hardhat run scripts/getMessage.js --network swisstronik
     ```
     - Run the getStorage scripts to interact with the contract and get the encrypted value.
     ```
     npx hardhat run scripts/getStorage.js --network swisstronik
     ```

