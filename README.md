# acme-price-utils

Price helpers for the Acme storefront. All money values are whole cents.

- `formatPrice(cents)` turns cents into a string like `$1,234.50`.
- `bulkDiscountPercent(quantity)` returns the bulk discount for a line:
  - 10 or more units: 10% off
  - 50 or more units: 20% off
- `lineTotal(unitPriceCents, quantity)` is price times quantity, minus the bulk discount.
- `cartTotal(items)` adds up every line in a cart.

There are no dependencies. You need Node.js 20 or newer.

```sh
npm test
```

GitHub Actions runs the same tests on every push and pull request (`.github/workflows/test.yml`).

---

This repo is a starter for a Devin workshop lab. See [DEVIN_DEMO.md](DEVIN_DEMO.md) for the steps and the prompt.
