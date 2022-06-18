import { useState, useEffect } from "react";
import "./Dashboard.css";
import Fridge from "./fridge/Fridge";

export default function Dashboard() {
  let [fridges, setFridges] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then((data) => setFridges(data));
  }, []);

  return (
    <div className="main">
      {window.location.pathname === "/" ? (
        <ul className="fridge-list">
          {Object.keys(fridges).map((fridgeId) => (
            <li key={fridgeId}>
              <a className="fridge-menu-item" href={`fridge/${fridgeId}`}>
                Fridge {fridgeId}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <Fridge />
      )}
    </div>
  );
}
