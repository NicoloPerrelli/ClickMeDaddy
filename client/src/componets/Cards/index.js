import React from "react";
import "./card.css"

function Card(props) {//this is handed a picture and id
  return (
    <button className="Card">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </button>
  );
}
export default Card;

