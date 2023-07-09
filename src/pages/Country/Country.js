import React from "react";
import { useParams } from "react-router";
import { useTrip } from "../../context/TripAdviserProvider";
import CountryCard from "../../component/CountryCard/CountryCard";

function Country() {
  const { countientId } = useParams();
  const { state } = useTrip();
  const selectedCountient = state.continents.find(
    (contient) => contient.id === Number(countientId)
  );
  console.log("selectedCountient", selectedCountient);
  return (
    <div>
      <h2>Top Countries in {selectedCountient.name} for your next holiday</h2>
      <div className="continents-container">
        {selectedCountient?.countries.map((country) => (
          <CountryCard
            country={country}
            key={country.id}
            name={selectedCountient.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Country;
