# 🔨 Sample Hardhat Project

**A beginner-friendly Ethereum development setup using [Hardhat](https://hardhat.org/)**

This project showcases a simple use case for Hardhat — a development environment designed to help you compile, test, and deploy smart contracts on the Ethereum blockchain.

It includes:
- A basic **Solidity smart contract**
- A test script to verify its functionality
- A **Hardhat Ignition** module for easy deployment

Perfect for learning or quickly prototyping Ethereum-based applications.

---

## 🚀 Getting Started

### 📦 Installation

To get started, ensure you have Node.js and npm installed, then run:

```bash
npm install
```

---

### 🛠️ Common Hardhat Commands

Here are some useful commands you can try inside the project directory:

```bash
# Display all available Hardhat tasks
npx hardhat help

# Run the smart contract test suite
npx hardhat test

# Run tests with gas reporting enabled
REPORT_GAS=true npx hardhat test

# Start a local Ethereum network
npx hardhat node

# Deploy using Hardhat Ignition
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

---

## 📂 Project Structure

```
/contracts          # Solidity smart contracts (e.g., Lock.sol)
/test               # JavaScript/TypeScript tests for the contracts
/ignition/modules   # Deployment modules for Hardhat Ignition
hardhat.config.js   # Hardhat configuration file
```

---

## ✅ Features

- ✨ Simple contract included (Lock.sol)
- 🧪 Built-in tests using Mocha/Chai
- 🚀 Ready-to-use deployment via Hardhat Ignition
- 🔧 Easy to expand for more advanced dApps

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

> Created with ❤️ using Hardhat – making Ethereum development fast and delightful.
