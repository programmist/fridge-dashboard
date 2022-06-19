/**
 * Transform data for chart showing cool-down times (hours) for each cycle
 */
export const cooldownDataXform = (dataTemplate, fridgeData) => {
  return fridgeData.reduce((data, cycle) => {
    data.labels.push(`cycle ${cycle.cooldownNumber}`);
    data.datasets[0].data.push(cycle.cooldownTime / 3600); // seconds -> hours
    return data;
  }, dataTemplate);
};

/*
 * Transform data for chart showing warm-up times (hours) for each cycle
 */
export const warmupDataXform = (dataTemplate, fridgeData) => {
  return fridgeData.reduce((data, cycle) => {
    data.labels.push(`cycle ${cycle.cooldownNumber}`);
    data.datasets[0].data.push(cycle.warmupTime / 3600); // seconds -> hours
    return data;
  }, dataTemplate);
};

/**
 * Transform data for chart showing times (hours) between cycles for each cycle
 */
export const btwnCycleXform = (dataTemplate, fridgeData) => {
  for (let i = 0; i < fridgeData.length - 1; i++) {
    const warmupEnd = fridgeData[i].warmupEnd;
    const cooldownStart = fridgeData[i + 1].cooldownStart;
    const btwnTime =
      (new Date(cooldownStart).getTime() - new Date(warmupEnd).getTime()) /
      1000;

    dataTemplate.labels.push(`cycles ${i} - ${i + 1}`);
    dataTemplate.datasets[0].data.push(btwnTime / 3600); // seconds -> hours
  }
  return dataTemplate;
};

/*
 * Return total times of all fridge cycles in seconds
 */
const calculateTotals = (fridgeData) => {
  return fridgeData.reduce(
    (totals, cycle) => {
      // Sum total time of all cycles
      totals.totalTime += cycle.cycleTime;

      // Sum cycle cooldown times
      totals.totalCooldownTime += cycle.cooldownTime;

      // Sum cycle warm-up times
      totals.totalWarmupTime += cycle.warmupTime;

      // Sum cycle cold times
      totals.totalColdTime += cycle.coldTime;

      return totals;
    },
    {
      totalTime: 0,
      totalCooldownTime: 0,
      totalWarmupTime: 0,
      totalColdTime: 0,
    }
  );
};

/**
 * Calculate and return summary data for all fridge cycles
 * - Percent of time spent cooling down
 * - Percent of time spent warming up and
 * - Percent of time cold across all past cycles
 */
export const summaryXform = (dataTemplate, fridgeData) => {
  let { totalTime, totalCooldownTime, totalWarmupTime, totalColdTime } =
    calculateTotals(fridgeData);

  const percentCooldownTime = (totalCooldownTime / totalTime) * 100;
  const percentWarmupTime = (totalWarmupTime / totalTime) * 100;
  const percentColdTime = (totalColdTime / totalTime) * 100;

  dataTemplate.datasets[0].data = [
    percentCooldownTime,
    percentWarmupTime,
    percentColdTime,
  ];
  return dataTemplate;
};
