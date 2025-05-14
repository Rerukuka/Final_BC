// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract CharityFund {
    address public owner;
    uint public goal = 1 ether;
    uint public totalRaised;
    bool public goalReached;

    mapping(address => uint) public donations;

    event DonationReceived(address donor, uint amount);
    event FundsWithdrawn(address receiver, uint amount);

    constructor() {
        owner = msg.sender;
        totalRaised = 0;
        goalReached = false;
    }

    function donate() external payable {
        require(msg.value > 0, "Must send ETH to donate");
        donations[msg.sender] += msg.value;
        totalRaised += msg.value;
        emit DonationReceived(msg.sender, msg.value);
        if (totalRaised >= goal) {
            goalReached = true;
        }
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(goalReached, "Goal not reached yet");
        uint amount = address(this).balance;
        payable(owner).transfer(amount);
        emit FundsWithdrawn(owner, amount);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
