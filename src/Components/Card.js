import React from "react";
import "../App.css";
import cardimage from "./cardimage.js";
import CardInfo from "./CardInfo.js";

function Card(props) {
  return (
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
          <cardimage island={props.island} />
          <CardInfo island={props.island} />
        </div>
      </div>
    </li>
  );
}

export default Card;
