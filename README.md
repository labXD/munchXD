# Storing map location

## Pre-requisites

- Node LTS
  - suggestion: use nvm to manage node versions
  - [install nvm via homebrew](https://formulae.brew.sh/formula/nvm)

## Getting Started

We assume you have node 18 installed. If not, please install it.

- From root, run `corepack enable` to enable pnpm
  - This automatically comes with node 16
- Run `pnpm run init` to install inital packages

That's it! You're ready to go.

## Development

Run `pnpm run dev` from the root to start all dev environments. This will continuously watch for changes and rebuild.

## Production

Run `pnpm run build` from the root to build all packages.
