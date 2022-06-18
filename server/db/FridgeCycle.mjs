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
    this.cooldownTime = this.getTimeDurationInSeconds(
      this.cooldownStart,
      this.cooldownEnd
    );
    this.warmupTime = this.getTimeDurationInSeconds(
      this.warmupStart,
      this.warmupEnd
    );
  }

  getTimeDurationInSeconds(start, end) {
    return (new Date(end).getTime() - new Date(start).getTime()) / 1000;
  }
}
