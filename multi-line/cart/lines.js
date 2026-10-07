/**
 * Multi-line cart sum - intentional bug for OpDesk GitHub hard E2E (G8).
 */

export function sumLines(lines) {
  /** BUG: only first line counted */
  if (!lines.length) return 0;
  const first = lines[0];
  return first.unitPrice * first.qty;
}

export function hintLines(lines) {
  return lines.reduce((s, l) => s + l.unitPrice * l.qty, 0);
}
