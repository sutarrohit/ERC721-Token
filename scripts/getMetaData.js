const { ethers } = require("hardhat")

async function getData() {
    const contract = await ethers.getContract("TokenNft")

    const name = await contract.name()
    console.log(name)

    const symbol = await contract.symbol()
    console.log(symbol)
}

getData()
