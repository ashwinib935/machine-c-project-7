import React from "react";
import Card from "../../component/Card/Card";
import "./Home.css";
import { useTrip } from "../../context/TripAdviserProvider";
function Home() {
  const { state, dispatch } = useTrip();
  console.log("state", state);
  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top Continents for your next holiday</h2>
      <div className="continents-container">
        {state.continents?.map((continent) => (
          <Card continent={continent} key={continent.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
