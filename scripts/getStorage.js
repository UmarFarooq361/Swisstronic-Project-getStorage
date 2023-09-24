const hre = require("hardhat");

async function main() {
  // Address of the deployed contract
  const contractAddress = "0x639FBcbE8570709896Ca8aa564DCBF8B08fAc19d"; // Replace with your contract's address

  // Slot number for the storage variable you want to access (slot #0 in this case)
  const slot = "0x0";

  // Get the provider
  const provider = hre.network.provider;

  // Make the JSON RPC call to get the storage value
  const storageValue = await provider.send("eth_getStorageAt", [contractAddress, slot, "latest"]);

  console.log("Storage Value:", storageValue);
  /*
In swisstronic`eth_getStorageAt()` returns an encrypted value, is in line with the Swisstronik blockchain's 
design for enhanced privacy and confidentiality. 
Swisstronik implements the Ethereum Virtual Machine (EVM) within Intel SGX to enhance the privacy of 
transaction data and smart contracts. As a result, the contract state variables are only visible and 
accessible within the contract itself, and even full nodes and validators cannot access raw contract data.

When you use `eth_getStorageAt()` on Swisstronik, it returns encrypted values because the contract state is 
encrypted to ensure confidentiality. This is a significant departure from the behavior you might be familiar 
with on the Ethereum mainnet or other Ethereum-compatible blockchains, where you can directly access the 
values of storage slots.

   */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
