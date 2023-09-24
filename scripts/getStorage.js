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
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
