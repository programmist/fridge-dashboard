import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function FridgeBarChart({
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
        backgroundColor: styles.backgroundColor,
      },
    ],
  };

  const data = transformationFn(dataTemplate, fridgeData);

  return <div>{data.labels.length > 0 && <Bar data={data} />}</div>;
}
