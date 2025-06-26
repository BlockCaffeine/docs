# Infrastructure

https://github.com/BlockCaffeine/Infrastructure

---

This repository contains all DevOps related configuration for the BlockCaffeine project. All software components, except the [Cafereum Smart Contract](./cafereum.md), are deployed on a Raspberry Pi 5 using Docker. 

Each component has its own `Dockerfile` in the root directory of the component. The components are cloned to a single directory on the Raspberry Pi and are started using the `docker-compose.yaml` file in the root directory of the Infrastructure repository. 

The Infrastructure repository also contains a [Caddy](https://caddyserver.com/) configuration for serving the EspressOS web application. Caddy acts as a reverse proxy and handles HTTPS certificates automatically using [Let's Encrypt](https://letsencrypt.org/). To automatically obtain certificates, the Caddy server is configured to use the Cloudflare DNS API for domain verification. This requires a Cloudflare API token with permissions to manage DNS records.

## File Structure

> [!CAUTION]
> Make sure to clone **all software components** into the same directory as the `Infrastructure` repository. The `docker-compose.yaml` files references the Dockerfiles of the components using relative paths.

```
-- BlockCaffeine
   |-- Anteiku
   |   |-- Dockerfile
   |   |-- ... other Anteiku files
   |-- EspressOS
   |   |-- Dockerfile
   |   |-- ... other EspressOS files
   |-- Infrastructure
   |   |-- caddy
   |   |-- docker-compose.yaml
   |   `-- README.md
   `-- Jurassip
       |-- Dockerfile
       |-- ... other Jurassip files
```

## Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on the Raspberry Pi 5.
- [Cloudflare API Token](https://developers.cloudflare.com/api/tokens/) with permissions to manage DNS records for the domain used with the Caddy server. The token should have the following permissions:
  - Zone:Read
  - Zone:DNS:Edit


## Getting Started

1. Add `.env` file with the following content:

```env
CLOUDFLARE_API_TOKEN=<your_cloudflare_api_token>
```

1. Starting all components with a single command:

```bash
docker compose up -d
```

2. Stopping all components with a single command:

```bash
docker compose down
```

3. (Optional) - Building all components:

```bash
docker compose build
```
