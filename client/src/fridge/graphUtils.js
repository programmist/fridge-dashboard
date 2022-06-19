/*
 *
 */
const cloneTemplate = (dataTemplate) => {
  return structuredClone({
    ...dataTemplate,
    datasets: [
      {
        ...dataTemplate.datasets[0],
      },
    ],
  });
};

/**
 *
 */
export const cooldownDataXform = (dataTemplate, fridgeData) => {
  var data = cloneTemplate(dataTemplate);
  return fridgeData.reduce((data, cycle) => {
    data.labels.push(`cycle ${cycle.cooldownNumber}`);
    data.datasets[0].data.push(cycle.cooldownTime / 3600); // milliseconds -> hours
    return data;
  }, data);
};

export const warmupDataXform = (dataTemplate, fridgeData) => {
  var data = cloneTemplate(dataTemplate);
  return fridgeData.reduce((data, cycle) => {
    data.labels.push(`cycle ${cycle.cooldownNumber}`);
    data.datasets[0].data.push(cycle.warmupTime / 3600); // milliseconds -> hours
    return data;
  }, data);
};

/**
 *
 */
export const btwnCycleXform = (dataTemplate, fridgeData) => {
  var data = cloneTemplate(dataTemplate);

  for (let i = 0; i < fridgeData.length - 1; i++) {
    const warmupEnd = fridgeData[i].warmupEnd;
    const cooldownStart = fridgeData[i + 1].cooldownStart;
    const btwnTime =
      (new Date(cooldownStart).getTime() - new Date(warmupEnd).getTime()) /
      1000;

    data.labels.push(`cycles ${i} - ${i + 1}`);
    data.datasets[0].data.push(btwnTime / 3600); // milliseconds -> hours
  }
  return data;
};

/**
 * Summary of percent of time spent cooling down, percent of time spent warming up and
 * percent of time cold across all past cycles.
 */
export const summaryXform = (dataTemplate, fridgeData) => {
  var data = cloneTemplate(dataTemplate).reduce(
    (data, cycle) => {
      // TODO: Calculate total cycle time = time spent cold + cooling down + warming up
      //
      // TODO: Calculate total time spent cooling down (intermediate value)
      // TODO: Calculate PERCENT time spent cooling down
      //
      // TODO: Calculate total time spent warming up (intermediate value)
      // TODO: Calculate PERCENT time spent warming up
      //
      // TODO: Calculate total time cold (intermediate value)
      // TODO: Calculate PERCENT time cold
      //
      // TODO: manually create labels
      // TODO: manually add data from above calculations
    },
    { totalTime: 0, totalCooldown: 0, totalwarmup: 0, totalCold: 0 }
  );
};
