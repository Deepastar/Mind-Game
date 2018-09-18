import React from "react";
// import "../styles/Header.css";

const Header = props => (
  <header className="header">
   <div className="title">{props.children}</div>
   <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </header>
);

export default Header;
