import React from "react";
import "./Card.css";

const Card = props => (
  <div class="card">
    <div style={styles.heading}>Lorem ipsum dolor</div>
    <div style={styles.content}>
     {props.children}
    </div>
  </div>
);

export default Card;
