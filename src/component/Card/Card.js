import React from "react";
import "./Card.css";
import { useNavigate } from "react-router";
function Card({ continent }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onClick={() => navigate(`/countries/${continent.id}`)}
    >
      <img src={continent.image} alt="" className="card-img" />
    </div>
  );
}

export default Card;
