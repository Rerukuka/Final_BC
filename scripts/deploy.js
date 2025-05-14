const hre = require("hardhat");

async function main() {
  const CharityFund = await hre.ethers.getContractFactory("CharityFund");
  const charityFund = await CharityFund.deploy();

  await charityFund.waitForDeployment(); // заменяем deprecated .deployed()

  const address = await charityFund.getAddress(); // вместо .address

  console.log("✅ Contract deployed at:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
