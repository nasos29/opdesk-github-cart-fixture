/**
 * Tiny Node helper — intentional bug for OpDesk GitHub E2E.
 * calculateLineTotal should return unitPrice * quantity.
 */
export function calculateLineTotal(unitPrice, quantity) {
  // BUG: ignores quantity
  return unitPrice * quantity;
}

export function assertCartMath() {
  const got = calculateLineTotal(10, 2);
  if (got !== 20) {
    throw new Error(`Expected 20 for qty=2 price=10, got ${got}`);
  }
  return got;
}
