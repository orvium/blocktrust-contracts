pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PaperScoring {
    mapping (string => Scoring) public scorings;

    struct Scoring {
        address owner;
        string doi;
        uint scoring;
    }

    constructor() {
        console.log("Deploying scoring contract");
    }

    function addScoring(string memory doi, uint scoring) public {
        require(scorings[doi].owner == address(0), "This scoring has been already been added!");
        scorings[doi] = Scoring(msg.sender, doi, scoring);
    }

    function getScoring(string memory doi) public view returns (Scoring memory) {
        return scorings[doi];
    }
}
