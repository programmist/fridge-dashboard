import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  let [data, setData] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
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
          {JSON.stringify(data, null, 2)}
        </pre>
      </header>
    </div>
  );
}
