import React from "react";
import "../../../Styles/About/About.css";

import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import GalerijaFunc from "../Galerija/GalerijaFunc";
import ImgCompany from "../../../ImgCompany";
import CompanyImgCover from "../../../Img/ShowRoom/19.jpg";
function About({ scroll }) {
  return (
    <div className="About">
      <div className="About__container">
        <img className="About__coverImg" src={CompanyImgCover} alt="company img cover" />
        <LineAnimation header1="DANITO" scroll={scroll} scrollY={300} />
        <p className="About__headerText">
          Jedinstvena prilika da na jednom mestu pogledate salon i prozivodnju i shvatite da smo mi najbolji u svom
          poslu.
        </p>
        <div className="About__companyProfile">
          <div className="About__aboutDanito">
            <div className="About__companyInfo">
              <h2>O nama</h2>
              <p>
                Danito je firma koja se razvijala prethodnih 15 godina i postala jedna od najvećih firmi u zemlji. Nas
                cilj od samog osnivanja pa do danas je ostao isti, a to je da svaki nas proizvod mora biti savršen. To
                postizemo kvalitetom materijala, preciznošću izrade i dobro obučenom radnom snagom. Jedna smo od retkih
                firmi u ovom poslu koja se specijalizovala i za rad sa fizičkim licima. To postizemo time što se prema
                svakom našem klijentu ophodimo isto, sa istim kvalitetom usluge, bez obzira na veličinu posla. Kvalitet
                usluge ne obuhvata samo dobar proizvod već i potpuno ispunjenje rokova, dogovora i pojedinačnih želja
                kupaca.
              </p>
              <p>
                Svaki naš kupac ima mogućnost da se uveri u kvalitet koji pružamo obilaskom kroz salon i proizvodnju,
                gde će mu detaljno biti prikazne sve sitnice koje čine da prozor od dobrog pređe u najbolji.
              </p>
            </div>
            <GalerijaFunc className="AboutPage" ImgObjekti={ImgCompany.company1} />
          </div>
          <div className="About__aboutDanito">
            <div className="About__companyInfo">
              <h2>Klijenti</h2>
              <p>
                Možemo se pohvaliti činjenicom da se većina naših poslova zasniva na preporuci zadovoljnih kupaca i
                poslovanjem bez reklamacije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
