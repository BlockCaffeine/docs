# Espressos

https://github.com/BlockCaffeine/EspressOS

---

This component is the web application that provides a user interface for interacting with the Smart Contract [Cafereum](./cafereum.md). It is written using [Svelte-Kit](https://kit.svelte.dev/) and uses the [Viem](https://viem.sh/) library for interacting with the blockchain.

The application connects to the users metamask wallet and allows users to purchase coffee products as well as view their statistics. It is optimized for mobile devices only and not tested on desktop.

## Getting Started

1. Add `.env` file with the following content:

```env
PUBLIC_CAFEREUM_ADDRESS="0x1234567890abcdef1234567890abcdef12345678" # Smart contract address
```

2. Install dependencies:

```bash
pnpm install
pnpm run dev:start
```
