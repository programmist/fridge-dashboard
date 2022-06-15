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
}
