# Infrastructure

https://github.com/BlockCaffeine/Infrastructure

---

This repository contains all DevOps related configuration for the BlockCaffeine project. All software components, except the [Cafereum Smart Contract](./cafereum.md), are deployed on a Raspberry Pi 5 using Docker. Each component has its own `Dockerfile` in the root directory of the component. The components are cloned to a single directory on the Raspberry Pi and are started using the `docker-compose.yaml` file in the root directory of the Infrastructure repository. 

## Getting Started

1. Starting all components with a single command:

> [!CAUTION]
> Make sure to clone all software components into the same directory as the `Infrastructure` repository. The `docker-compose.yaml` files references the Dockerfiles of the components using relative paths.

```bash
docker compose up -d
```

2. Stopping all components with a single command:

```bash
docker compose down
```
