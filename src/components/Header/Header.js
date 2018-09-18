import React from "react";
 import "./Header.css";

const Header = props => (
  <header className="header">
   <div className="title">{props.children}</div>
   <div className="scores">
      Score: {props.score} Highscore: {props.highScore}
    </div>
  </header>
);

export default Header;
