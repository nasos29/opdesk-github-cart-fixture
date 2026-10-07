import { FeePacket } from "./lib/fee.js";
import { withFee } from "./lib/total.js";

export function assertCheckout() {
  const subtotal = 100;
  const fee = FeePacket.asAmount(5);
  const total = withFee(subtotal, fee);
  if (total !== 105) {
    throw new Error(`Expected total 105, got ${total}`);
  }
  return total;
}
