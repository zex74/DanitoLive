import React from "react";
import "../../../../Styles/CompanyPresentation/CompanyPresentation.css";
import LineAnimation from "../../../Komponente/LineAnimation/LineAnimation";

function CompanyPresentation({ scroll, scrollY }) {
  return (
    <div className="CompanyPresentation">
      <div className="CompanyPresentation__container">
        <img
          src="https://www.drutex.eu/static/layout2017/img/banery/prezentacja-firmowa.jpg"
          alt="danito presentation"
        />
        <div className="CompanyPresentation__lineVideo">
          <LineAnimation header1="Company presentation" scroll={scroll} scrollY={scrollY} />
          <button
            className={scroll >= scrollY ? "CompanyPresentation__buttonVisible" : "CompanyPresentation__buttonHidden"}
          >
            SEE VIDEO
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyPresentation;
