import { asMoney } from "./money/amount.js";
import { formatEur } from "./money/format.js";

export function assertCurrency() {
  const amount = asMoney(42);
  const label = formatEur(amount);
  if (label !== "EUR 42") {
    throw new Error(`Expected EUR 42, got ${label}`);
  }
  return label;
}
