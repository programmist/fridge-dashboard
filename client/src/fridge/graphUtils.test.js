import {
  btwnCycleXform,
  cooldownDataXform,
  summaryXform,
  warmupDataXform,
} from "./graphUtils";

function getChartDataTemplate({ label, labels = [] }) {
  return {
    labels,
    datasets: [
      {
        label,
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
}

test("transforms cooldown fridge data to chart data", () => {
  const label = "Cooldown Cycles (hours)";
  const fridgeData = [
    { fridgeId: 1, cooldownNumber: 0, cooldownTime: 108000 },
    { fridgeId: 1, cooldownNumber: 1, cooldownTime: 126000 },
  ];
  const expectedData = {
    labels: ["Cycle 0", "Cycle 1"],
    datasets: [
      {
        label,
        data: [30, 35],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  expect(
    cooldownDataXform(getChartDataTemplate({ label }), fridgeData)
  ).toEqual(expectedData);
});

test("transforms warmup fridge data to chart data", () => {
  const label = "Warmup Cycles (hours)";
  const fridgeData = [
    { fridgeId: 1, cooldownNumber: 0, warmupTime: 111600 },
    { fridgeId: 1, cooldownNumber: 1, warmupTime: 118800 },
  ];
  const expectedData = {
    labels: ["Cycle 0", "Cycle 1"],
    datasets: [
      {
        label,
        data: [31, 33],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  expect(warmupDataXform(getChartDataTemplate({ label }), fridgeData)).toEqual(
    expectedData
  );
});

test("transforms between cycle fridge data to chart data", () => {
  const label = "Time Between Cycles (hours)";
  const fridgeData = [
    {
      fridgeId: 1,
      cooldownNumber: 0,
      warmupEnd: "2019-01-05 08:00:00",
    },
    {
      fridgeId: 1,
      cooldownNumber: 1,
      cooldownStart: "2019-01-07 07:00:00",
      warmupEnd: "2019-01-06 08:30:00",
    },
    {
      fridgeId: 1,
      cooldownNumber: 2,
      cooldownStart: "2019-01-08 09:00:00",
      warmupEnd: "2019-01-06 09:00:00",
    },
  ];
  const expectedData = {
    labels: ["Cycles 0 - 1", "Cycles 1 - 2"],
    datasets: [
      {
        label,
        data: [47, 48.5],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  expect(btwnCycleXform(getChartDataTemplate({ label }), fridgeData)).toEqual(
    expectedData
  );
});

test("transforms summary fridge data to chart data", () => {
  const label = "Summary (percent)";
  const labels = ["Cooldown Time", "Warmup Time", "Cold Time"];
  const fridgeData = [
    {
      fridgeId: 1,
      cycleTime: 500,
      cooldownNumber: 0,
      cooldownTime: 100,
      warmupTime: 200,
      coldTime: 100,
    },
    {
      fridgeId: 1,
      cycleTime: 500,
      cooldownNumber: 1,
      cooldownTime: 100,
      warmupTime: 100,
      coldTime: 300,
    },
  ];
  const expectedData = {
    labels: ["Cooldown Time", "Warmup Time", "Cold Time"],
    datasets: [
      {
        label,
        data: [20, 30, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  expect(
    summaryXform(getChartDataTemplate({ label, labels }), fridgeData)
  ).toEqual(expectedData);
});
