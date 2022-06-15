import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [data, setData] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then((data) => setData(data));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
