import React from "react";
import "../App.css";
import button from "./button.js";

function CardInfo(props) {
  return (
    <div className="card-container">
      <div className="card-title">{props.island.name}</div>
      <p className="card-text description">{props.island.description}</p>
      <p className="card-text lat-lon">
        {props.island.coords.lat}, {props.island.coords.lon}
      </p>
      <button link={props.island.wiki} />
    </div>
  );
}

export default CardInfo;
