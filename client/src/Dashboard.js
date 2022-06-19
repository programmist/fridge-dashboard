import { useState, useEffect } from "react";
import chart from "./chart.png";
import "./Dashboard.css";
import Fridge from "./fridge/Fridge";

export default function Dashboard() {
  let [fridges, setFridges] = useState({});

  useEffect(() => {
    fetch("/api/fridges")
      .then((r) => r.json())
      .then((data) => setFridges(data));
  }, []);

  // TODO1: Create script that runs both client and server of this project (via npm start)

  // TODO2: review app and consider assumptions and future changes (for interview code review)

  // TODO3: Create Github issues for needed changes (enhancements, polish, bugs, etc)

  // TODO4: Move README.md to root & do small write-up of how to run (and maybe short description of app)
  return (
    <>
      {window.location.pathname === "/" ? (
        <div className="main">
          <h1>Select a Fridge</h1>
          <div className="fridge-list">
            {Object.keys(fridges).map((fridgeId) => (
              <div key={fridgeId}>
                <a className="fridge-menu-item" href={`fridge/${fridgeId}`}>
                  <img src={chart} alt={`Fridge ${fridgeId}`} />
                  <div className="fridge-name">Fridge {fridgeId}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Fridge />
      )}
    </>
  );
}
