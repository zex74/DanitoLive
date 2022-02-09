import React from "react";
import "../../../Styles/ButtonNavLeft/ButtonNavLeft.css";

function ButtonNavLeft({ buttonName, setSelected, img, imgClass }) {
  return (
    <div onClick={() => setSelected(buttonName)} className={imgClass || "ButtonNavLeft"}>
      {img ? <img src={img} alt=" img icon" /> : null}
      <button className="ButtonNavLeft__button">{buttonName}</button>
    </div>
  );
}

export default ButtonNavLeft;
