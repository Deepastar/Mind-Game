import React from "react";
import "./CardPiece.css";

const CardPiece = props => (
    <div  onClick={()=>props.checkClicks(props.id)} className="card">
        <img alt={props.name} src={props.image} />
    </div>
);

export default CardPiece;