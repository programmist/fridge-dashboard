export const cooldownDataXform = (dataTemplate, fridgeData) => {
  var data = structuredClone({
    ...dataTemplate,
    datasets: [
      {
        ...dataTemplate.datasets[0],
      },
    ],
  });
  return fridgeData.reduce((data, cycle) => {
    data.labels.push(`cycle ${cycle.cooldownNumber}`);
    data.datasets[0].data.push(cycle.cooldownTime / 3600); // milliseconds -> hours
    return data;
  }, data);
};

export const warmupDataXform = (dataTemplate, fridgeData) => {
  var data = structuredClone({
    ...dataTemplate,
    datasets: [
      {
        ...dataTemplate.datasets[0],
      },
    ],
  });
  return fridgeData.reduce((data, cycle) => {
    data.labels.push(`cycle ${cycle.cooldownNumber}`);
    data.datasets[0].data.push(cycle.warmupTime / 3600); // milliseconds -> hours
    return data;
  }, data);
};
