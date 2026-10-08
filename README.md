# OpDesk stress monorepo complex2 (9 concurrent jobs)

This repository bundles three hard GitHub cart fixtures for concurrent stress testing:

- `fee-packet/` - fee packet object instead of number (G6)
- `currency-label/` - money object-to-string break (G7)
- `multi-line/` - cart sum ignores second line (G8)

Each subfolder is an independent Node ESM package with an intentional bug.
