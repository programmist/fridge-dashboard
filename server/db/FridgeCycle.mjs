export default class FridgeCycle {
  constructor([
    fridgeId,
    cooldownNumber,
    cooldownStart,
    cooldownEnd,
    warmupStart,
    warmupEnd,
  ]) {
    this.fridgeId = fridgeId;
    this.cooldownNumber = cooldownNumber;
    this.cooldownStart = cooldownStart;
    this.cooldownEnd = cooldownEnd;
    this.warmupStart = warmupStart;
    this.warmupEnd = warmupEnd;
  }

  /**
   * Cooldown time in seconds
   */
  get cooldownTime() {
    (new Date(this.cooldownEnd).getTime() -
      new Date(this.cooldownStart).getTime()) /
      1000;
  }

  /**
   * Warmup time in seconds
   */
  get warmupTime() {
    (new Date(this.cooldownEnd).getTime() -
      new Date(this.cooldownStart).getTime()) /
      1000;
  }
}
