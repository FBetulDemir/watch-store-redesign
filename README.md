# Watch Company Redesign

A portfolio storefront built as a pnpm monorepo. The project will demonstrate a reusable design system, shared React components, and a polished watch-shopping experience.

## Requirements

- Node.js 22.12 or newer
- pnpm 10.34.5

## Getting started

```bash
corepack enable
pnpm install
pnpm dev
```

## Workspace

```text
apps/
  web/              Vite and React storefront
packages/
  design-tokens/    Shared visual foundations (planned)
  ui/               Reusable React components (planned)
```

## Commands

- `pnpm dev` starts the storefront development server.
- `pnpm build` builds every workspace package.
- `pnpm typecheck` type-checks every workspace package.
