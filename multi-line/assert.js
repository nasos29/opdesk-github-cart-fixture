import { cartTotal } from "./cart/checkout.js";

export function assertMultiLine() {
  const lines = [
    { unitPrice: 10, qty: 2 },
    { unitPrice: 5, qty: 3 },
  ];
  const total = cartTotal(lines);
  if (total !== 35) {
    throw new Error(`Expected 35 for two lines, got ${total}`);
  }
  return total;
}
