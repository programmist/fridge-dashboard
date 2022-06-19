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

  // TODO1: Generate graph with translucent overlay and text on top with "Fridge $X"
  //        NOTE: Maybe generate graph and turn into stock image (would be easier/faster-loading)
  //        wrap in <a href> to Fridge page
  //        use hover effect to indicate click-ability

  // TODO2: Create component that generates the fridge list above
  //        main component and sub-component for each fridge item

  // TODO3: Create script that runs both client and server of this project (via npm start)

  // TODO4: review app and consider assumptions and future changes (for interview code review)
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
