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

export default function FridgeLineChart({
  label,
  styles,
  transformationFn,
  fridgeData = {},
}) {
  const dataTemplate = {
    labels: [],
    datasets: [
      {
        label,
        data: [],
        borderColor: styles.borderColor,
        backgroundColor: styles.backgroundColor,
      },
    ],
  };

  const coolDownData = transformationFn(dataTemplate, fridgeData);

  return (
    <div>{coolDownData.labels.length > 0 && <Line data={coolDownData} />}</div>
  );
}
