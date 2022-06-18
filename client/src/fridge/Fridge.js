import { useState, useEffect } from "react";
import "./Fridge.css";

export default function Fridge() {
  let [fridge, setFridge] = useState({});

  useEffect(() => {
    fetch(`/api${window.location.pathname}`)
      .then((r) => r.json())
      .then((data) => setFridge(data));
  }, []);

  const path = window.location.pathname;
  const fridgeId = () => path.substring(path.lastIndexOf("/") + 1);

  return (
    <div className="fridge">
      <div id="cooldowns"></div>
      <div id="warmups"></div>
      <div id="between"></div>
      <div id="summary"></div>
      Fridge {fridgeId()}
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
        {JSON.stringify(fridge, null, 2)}
      </pre>
    </div>
  );
}
