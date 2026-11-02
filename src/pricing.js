// All money values are integer cents to avoid floating point errors.

// Bulk discount tiers, highest first. A tier applies when the quantity
// is at least `minQty`.
const BULK_TIERS = [
  { minQty: 50, percent: 20 },
  { minQty: 10, percent: 10 },
];

function formatPrice(cents) {
  if (!Number.isInteger(cents)) {
    throw new TypeError('cents must be an integer');
  }
  const sign = cents < 0 ? '-' : '';
  const abs = Math.abs(cents);
  const dollars = Math.floor(abs / 100).toLocaleString('en-US');
  const rest = String(abs % 100).padStart(2, '0');
  return `${sign}$${dollars}.${rest}`;
}

function bulkDiscountPercent(quantity) {
  for (const tier of BULK_TIERS) {
    if (quantity > tier.minQty) {
      return tier.percent;
    }
  }
  return 0;
}

function lineTotal(unitPriceCents, quantity) {
  if (!Number.isInteger(quantity) || quantity < 0) {
    throw new RangeError('quantity must be a whole number, 0 or more');
  }
  const gross = unitPriceCents * quantity;
  const discount = Math.round((gross * bulkDiscountPercent(quantity)) / 100);
  return gross - discount;
}

function cartTotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item.unitPriceCents, item.quantity), 0);
}

module.exports = { BULK_TIERS, formatPrice, bulkDiscountPercent, lineTotal, cartTotal };
