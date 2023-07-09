import React from "react";
import { useParams } from "react-router";
import { useTrip } from "../../context/TripAdviserProvider";

function City() {
  const { countryId } = useParams();
  const { country } = useParams();
  console.log("countryId", countryId);
  console.log("country", country);
  const { state } = useTrip();
  //   const selectedCountry = state.continents.filter(
  //     (contient) => contient.id === Number(countientId)
  //   );
  //   console.log("selectedCountient", selectedCountient);
  return <div>City</div>;
}

export default City;
