# Base Monorepo

A modern fullstack monorepo boilerplate using pnpm workspaces, NestJS (Prisma), Vite+React, and shared types.

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

### Install dependencies

pnpm install

### Development

#### Start all services (dev)

docker-compose -f docker/docker-compose.dev.yml up --build

#### Start all services (prod)

docker-compose -f docker/docker-compose.prod.yml up --build

#### Run lint, test, build

pnpm run lint
pnpm run test
pnpm run build

### Project Structure

- `packages/server`: NestJS backend (Prisma, MongoDB, PostgreSQL config commented)
- `packages/client`: React frontend
- `packages/shared`: Shared types/interfaces

### Environment Variables

Copy `.env.example` to `.env` and fill in your values.

### CI/CD

See `.github/workflows/ci-cd.yml`
