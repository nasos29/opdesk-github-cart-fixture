/**
 * Fee packet helper - intentional bug for OpDesk GitHub hard E2E (G6).
 */

export class FeePacket {
  static asAmount(feeAmount) {
    return feeAmount;
  }

  /** Red herring: correct fee float */
  static hintFee(feeAmount) {
    return feeAmount;
  }
}
