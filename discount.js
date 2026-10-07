/**
 * Tiny Node helper — intentional bug for OpDesk GitHub batch5 G2.
 * applyPercentDiscount should return price * (1 - percent/100).
 */
export function applyPercentDiscount(price, percent) {
  // BUG: subtracts percent points instead of applying percent of price
  return price - percent;
}

export function assertDiscountMath() {
  const got = applyPercentDiscount(200, 10);
  if (got !== 180) {
    throw new Error(`Expected 180 for price=200 percent=10, got ${got}`);
  }
  return got;
}
