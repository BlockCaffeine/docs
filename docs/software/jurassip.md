# Jurassip

https://github.com/BlockCaffeine/Jurassip

---

This component is used for sending commands to the Jura coffee machine via UART. It is written in [Rust](https://www.rust-lang.org/) and uses the [Serialport](https://crates.io/crates/serialport) crate for serial communication.

## Components
- `src/api/`
  - gRPC API for sending commands to the coffee machine
- `src/protocol/`
  - Protocol implementation for encoding commands into bit streams
- `src/serial/`
  - Serial communication implementation for establishing serial connection and sending commands to the coffee machine

## Getting Started

1. Add `.env` file with the following content:

```env
SERIAL_PORT_NAME="/dev/ttyAMA2" # or other serial port name
SERIAL_BAUD_RATE="9600" # hardware specific for coffee machine

GRPC_SERVER_HOST="0.0.0.0"
GRPC_SERVER_PORT="50051" 
```

2. Install dependencies:

```bash
cargo build
```

3. Run the server:

```bash
cargo run
```

