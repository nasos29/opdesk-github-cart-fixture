/**
 * Money amount helper - intentional bug for OpDesk GitHub hard E2E (G7).
 */

export function asMoney(n) {
  /** BUG: returns object instead of numeric amount */
  return {
    value: n,
    currency: "EUR",
    nested: { src: "opdesk_hard_g7" },
  };
}

export function hintMoney(n) {
  return n;
}
