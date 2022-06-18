import { useState, useEffect } from "react";
import "./Dashboard.css";
import Fridge from "./fridge/Fridge";

export default function Dashboard() {
  let [fridges, setFridges] = useState({});

  useEffect(() => {
    fetch("/api/fridges")
      .then((r) => r.json())
      .then((data) => setFridges(data));
  }, []);

  // TODO: Generate graph with translucent overlay and text on top with "Fridge $X"
  //       wrap in <a href> to Fridge page
  //       use hover effect to indicate click-ability

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
