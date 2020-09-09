import React from "react";
import "../Views/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png"></img>
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
