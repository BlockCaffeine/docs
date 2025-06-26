# Cafereum

https://github.com/BlockCaffeine/Cafereum

---

This component is an [Ethereum](https://ethereum.org) smart contract written in [Solidity](https://soliditylang.org/) using the [Hardhat](https://hardhat.org/) framework.

The contract itself `contracts/Cafereum.sol` implements the [ERC-721](https://eips.ethereum.org/EIPS/eip-721) standard for non-fungible tokens (NFTs) using the [OpenZeppelin](https://openzeppelin.com/) library. NFT metadata files are available in `nft-metadata/` directory and are already deployed on the [IPFS](https://ipfs.io/) network.

The hardhat ignition module `ignition/modules/Cafereum.ts` is used to deploy the contract to the blockchain. Initial coffee product prices are set in the ignition module.

## Getting Started

1. Add `.env` file with the following content:

```env
WALLET_PRIVATE_KEY=<your_private_key>
```

2. Install dependencies:

```bash
npm install
```

3. Compile and deploy the contract:

```bash
npx hardhat complile
npx hardhat ignition deploy ./ignition/modules/Cafereum.ts --network uniMaBlockchain
```

## Scripts

To make interactions with the contract easier, several scripts are provided in the `scripts/` directory. Scripts can be executed using the following command:

```bash
npx hardhat run ./scripts/<name_of_script.ts> --network uniMaBlockchain
```

## Testing

The contract is tested using the [Hardhat](https://hardhat.org/) testing framework. Tests are located in the `test/` directory. To run the tests, use one of the following commands:

```bash
npx hardhat test
npx hardhat coverage
```
