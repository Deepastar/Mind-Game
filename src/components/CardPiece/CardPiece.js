import React from "react";
import "./CardPiece.css";

const CardPiece = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default CardPiece;