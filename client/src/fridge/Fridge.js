import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Fridge.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Fridge() {
  let [fridgeData, setFridgeData] = useState([]);

  useEffect(() => {
    fetch(`/api${window.location.pathname}`)
      .then((r) => r.json())
      .then((data) => setFridgeData(data));
  }, []);

  const path = window.location.pathname;
  const fridgeId = path.substring(path.lastIndexOf("/") + 1);
  const dataTemplate = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // TODO: export to library

  // TODO2: combine cooldown/warmup into one graph?

  const coolDownData = (() => {
    var data = structuredClone({
      ...dataTemplate,
      datasets: [
        {
          ...dataTemplate.datasets[0],
          label: `Fridge ${fridgeId} Cooldown Cycles (hours)`,
        },
      ],
    });
    return fridgeData.reduce((data, cycle) => {
      data.labels.push(`cycle ${cycle.cooldownNumber}`);
      data.datasets[0].data.push(cycle.cooldownTime / 3600); // milliseconds -> hours
      return data;
    }, data);
  })();

  return (
    <div className="fridge">
      <h1>Fridge {fridgeId}</h1>
      <div id="cooldowns">
        {coolDownData.labels.length > 0 && <Line data={coolDownData} />}
      </div>
      <div id="warmups"></div>
      <div id="between"></div>
      <div id="summary"></div>
      <pre
        style={{
          border: "thin white solid",
          textAlign: "left",
          width: "700px",
          height: "400px",
          overflow: "scroll",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          color: "green",
        }}
      >
        {JSON.stringify(fridgeData, null, 2)}
      </pre>
    </div>
  );
}
