export function calculateLineTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

export function assertCartMath() {
  const got = calculateLineTotal(10, 2);
  if (got !== 20) throw new Error(`Expected 20, got ${got}`);
  return got;
}
