let web3;
let contract;
const contractAddress = "0x7aE72df0a0c08615b377020C0909658294D53199"; // ← твой адрес контракта
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "donate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "goal",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "goalReached",
    "outputs": [
      { "internalType": "bool", "name": "", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalRaised",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "donations",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

window.addEventListener("load", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await ethereum.request({ method: "eth_requestAccounts" });

    contract = new web3.eth.Contract(abi, contractAddress);
    getBalance();
  } else {
    alert("Установите MetaMask!");
  }
});

async function getBalance() {
  const balanceWei = await contract.methods.getBalance().call();
  const balanceEth = web3.utils.fromWei(balanceWei, "ether");
  document.getElementById("balance").innerText = balanceEth;
}

async function donate() {
  const accounts = await web3.eth.getAccounts();
  const amount = document.getElementById("amount").value;
  const amountWei = web3.utils.toWei(amount, "ether");

  try {
    await contract.methods.donate().send({
      from: accounts[0],
      value: amountWei,
    });
    alert("Спасибо за пожертвование!");
    getBalance();
  } catch (err) {
    console.error(err);
    alert("Ошибка транзакции");
  }
}
