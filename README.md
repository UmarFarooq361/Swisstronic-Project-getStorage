This repository provides a simple example of how to interact with smart contracts on the Swisstronik blockchain using JavaScript and the SwisstronikJS library. Swisstronik is a blockchain platform that enhances the privacy and confidentiality of transaction data and smart contracts.

## Prerequisites
Before you start, ensure you have the following:
- Node.js and npm installed on your machine.
- An active Swisstronik account and access to a Swisstronik node's JSON-RPC endpoint.
## Getting Started
1. Clone this repository:
   ```
   git clone https://github.com/yourusername/swisstronik-smart-contract-example.git
   ```
2. Install project dependencies:

   ```
   npm install
   ```

3. Configure `hardhat.config.js`:

   Open the `hardhat.config.js` file and configure the Swisstronik network with your JSON-RPC endpoint URL and an Ethereum account private key.

4. Write and Compile Smart Contract:
   - Compile the smart contract by running:
     ```
     npx hardhat compile
     ```
5. Deploy Smart Contract:
   - Deploy the contract by running:
     ```
     npx hardhat run scripts/deploy.js --network swisstronik
     ```
6. Interact with Smart Contract:
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


```
