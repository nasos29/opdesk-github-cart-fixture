/**
 * Fee packet helper - intentional bug for OpDesk GitHub hard E2E (G6).
 */

export class FeePacket {
  /** BUG: returns structured payload instead of numeric fee */
  static asAmount(feeAmount) {
    return {
      amount: feeAmount,
      kind: "handling",
      nested: { src: "opdesk_hard_g6" },
    };
  }

  /** Red herring: correct fee float */
  static hintFee(feeAmount) {
    return feeAmount;
  }
}
