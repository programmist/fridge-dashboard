import { useState, useEffect } from "react";
import {
  btwnCycleXform,
  cooldownDataXform,
  summaryXform,
  warmupDataXform,
} from "./graphUtils";
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
import "./Fridge.css";
import FridgeLineChart from "./FridgeLineChart";
import FridgeBarChart from "./FridgeBarChart";

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

  return (
    <div className="fridge">
      <h1>Fridge {fridgeId}</h1>
      <div className="graphs">
        <div id="cooldowns" className="graph-container">
          <FridgeLineChart
            label="Cooldown Cycles (hours)"
            styles={{
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            }}
            transformationFn={cooldownDataXform}
            fridgeData={fridgeData}
          />
        </div>
        <div id="warmups" className="graph-container">
          <FridgeLineChart
            label="Warmup Cycles (hours)"
            styles={{
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            }}
            transformationFn={warmupDataXform}
            fridgeData={fridgeData}
          />
        </div>
        <div id="between" className="graph-container">
          <FridgeLineChart
            label="Time Between Cycles (hours)"
            styles={{
              borderColor: "rgb(21 172 58)",
              backgroundColor: "rgba(21, 172, 58, 0.5)",
            }}
            transformationFn={btwnCycleXform}
            fridgeData={fridgeData}
          />
        </div>
        <div id="summary" className="graph-container">
          <FridgeBarChart
            label="Summary (percent)"
            styles={{
              backgroundColor: "rgba(180, 90, 250, 0.5)",
            }}
            transformationFn={summaryXform}
            fridgeData={fridgeData}
          />
        </div>
      </div>
    </div>
  );
}
