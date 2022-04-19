const Web3 = require("web3")

const web3 = new Web3("wss://mainnet.infura.io/ws/v3/8f1d84243d204c15a371933816eef71b")

const abi = require("./ERC721.json")

// todo: add collection address here!
const collectionAddr = "0x1906fd9c4ac440561f7197da0a4bd2e88df5fa70"

async function main() {
    const collection = new web3.eth.Contract(abi, collectionAddr)


    // todo: set token id!
    const token = 16483;

    const uri = await collection.methods.tokenURI(token).call()
    console.log(`token ${token} of collection ${collectionAddr} has tokenURI = ${uri}`)
    process.exit(0)
}

main();
