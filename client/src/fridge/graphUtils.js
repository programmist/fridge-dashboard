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

export const btwnCycleXform = (dataTemplate, fridgeData) => {
  var data = structuredClone({
    ...dataTemplate,
    datasets: [
      {
        ...dataTemplate.datasets[0],
      },
    ],
  });

  for (let i = 0; i < fridgeData.length - 1; i++) {
    const warmupEnd = fridgeData[i].warmupEnd;
    const cooldownStart = fridgeData[i + 1].cooldownStart;
    const btwnTime =
      (new Date(cooldownStart).getTime() - new Date(warmupEnd).getTime()) /
      1000;

    data.labels.push(`cycles ${i} = ${i + 1}`);
    data.datasets[0].data.push(btwnTime / 3600); // milliseconds -> hours
  }
  return data;
};
