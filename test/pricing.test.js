const test = require('node:test');
const assert = require('node:assert/strict');
const { formatPrice, bulkDiscountPercent, lineTotal, cartTotal } = require('../src/pricing');

test('formatPrice shows dollars and cents', () => {
  assert.equal(formatPrice(0), '$0.00');
  assert.equal(formatPrice(5), '$0.05');
  assert.equal(formatPrice(1999), '$19.99');
  assert.equal(formatPrice(123456789), '$1,234,567.89');
  assert.equal(formatPrice(-250), '-$2.50');
});

test('formatPrice rejects fractional cents', () => {
  assert.throws(() => formatPrice(19.5), TypeError);
});

test('no bulk discount below 10 units', () => {
  assert.equal(bulkDiscountPercent(1), 0);
  assert.equal(bulkDiscountPercent(9), 0);
});

test('bulk discount starts at exactly 10 units', () => {
  assert.equal(bulkDiscountPercent(10), 10);
});

test('bulk discount tiers above the boundaries', () => {
  assert.equal(bulkDiscountPercent(25), 10);
  assert.equal(bulkDiscountPercent(120), 20);
});

test('lineTotal multiplies price by quantity', () => {
  assert.equal(lineTotal(250, 4), 1000);
  assert.equal(lineTotal(250, 0), 0);
});

test('lineTotal applies the bulk discount', () => {
  assert.equal(lineTotal(1000, 20), 18000);
});

test('lineTotal rejects bad quantities', () => {
  assert.throws(() => lineTotal(100, -1), RangeError);
  assert.throws(() => lineTotal(100, 1.5), RangeError);
});

test('cartTotal adds up every line', () => {
  const items = [
    { sku: 'MUG', unitPriceCents: 1200, quantity: 2 },
    { sku: 'STICKER', unitPriceCents: 150, quantity: 30 },
  ];
  assert.equal(cartTotal(items), 2400 + 4050);
  assert.equal(cartTotal([]), 0);
});
