import React from "react";
import { useNavigate } from "react-router";

function CountryCard({ country, name }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => navigate(`/cities/${name}/${country.id}`)}
    >
      <img src={country.image} alt="" className="card-img" />
      <p>{country.name}</p>
    </div>
  );
}

export default CountryCard;
