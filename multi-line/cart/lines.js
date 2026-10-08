/**
 * Multi-line cart sum - intentional bug for OpDesk GitHub hard E2E (G8).
 */

export function sumLines(lines) {
  return hintLines(lines);
}

export function hintLines(lines) {
  return lines.reduce((s, l) => s + l.unitPrice * l.qty, 0);
}
