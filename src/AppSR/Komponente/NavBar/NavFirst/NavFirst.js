import React from "react";
import "../../../../Styles/NavFirst/NavFirst.css";
import Logo from "../../../../Img/Logo.png";

function NavFirst() {
  return (
    <div className="NavFirst">
      <div className="Nav__header">
        <a className="Nav__headerLogo" href="/">
          <img src={Logo} alt="datito logo" />
          <div className="Nav__headerLogoText">
            <h3>DANITO</h3>
            <p>construction</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NavFirst;
