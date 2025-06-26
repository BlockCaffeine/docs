# Anteiku

https://github.com/BlockCaffeine/Anteiku

---

This component acts as a bridge between the Ethereum virtual machine (EVM) and the physical non-blockchain hardware. It is written in [TypeScript](https://www.typescriptlang.org/) and uses the [Ethers.js](https://docs.ethers.org) library for interacting with the Ethereum blockchain.

The componenet implements an event listener that listens for `ProductPurchase` events from the `Cafereum` smart contract on the blockchain. Upon receiving an event, it relays the purchase information to the [Jurassip](./jurassip.md) component via the gRPC API.

## Getting Started

1. Add `.env` file with the following content:

```env
GRPC_SERVER_HOST="127.0.0.1" # gRPC server endpoint host (Jurassip)
GRPC_SERVER_PORT="50051" # gRPC server endpoint port (Jurassip)

BLOCKCHAIN_RPC_URL="https://my-blockchain-node:32779" # URL of the blockchain api node
CONTRACT_ADDRESS="0x1234567890abcdef1234567890abcdef12345678" # Smart contract listened for events
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the server:

```bash
pnpm exec tsx src/main.ts
```
