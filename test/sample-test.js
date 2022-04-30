const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PaperScoring", function() {
  it("Should add scoring", async function() {
    const PaperScoring = await ethers.getContractFactory("PaperScoring");
    const paperScoringDeployed = await PaperScoring.deploy();
    await paperScoringDeployed.deployed();

    const addScoringTx = await paperScoringDeployed.addScoring('mydoi', 3);

    // wait until the transaction is mined
    await addScoringTx.wait();

    const scoring = await paperScoringDeployed.getScoring('mydoi');
    console.log(scoring);

    expect(scoring).to.include('mydoi');
  });
});
