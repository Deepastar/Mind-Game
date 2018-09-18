import React from "react";
import "./Card.css";

const Card = props => (
  <div className="container">
    <div className="heading">Click on each image and you should not click any repeated image or you will loose this game and the score too!!!</div>
     {props.children}
  </div>
);

export default Card;
