import React from "react";
import "../../../../Styles/Footer/Footer.css";

import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div className="Footer">
      <div className="Kontakt__infoContainer">
        <div className="Kontakt__phoneEmail">
          <RoomIcon />
          <a
            href="https://www.google.rs/maps/place/%C5%BDarka+Zrenjanina+114,+Pan%C4%8Devo+260000/@44.8576638,20.6522046,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7ed857157abf:0x47141fd5145e027d!8m2!3d44.85766!4d20.6543933"
            target="_blank"
            rel="noreferrer"
          >
            Žarka Zrenjanina 114, 26000 Pančevo
          </a>
        </div>
        <div className="Kontakt__phoneEmail">
          <LocalPhoneIcon />
          <a href="tel:013-367-700">013 367 700</a>
        </div>
        <div className="Kontakt__phoneEmail">
          <MailIcon />
          <p onClick={() => (window.location = "mailto:office@danito.rs")}>office@danito.rs</p>
        </div>
        <div className="Kontakt__phoneEmail">
          <LanguageIcon />
          <a href="https://www.danito.rs">https://www.danito.rs</a>
        </div>
      </div>
      <div className="Kontakt__radnoVreme">
        <h2>Radno Vreme</h2>
        <div className="Kontakt__radnoVremeConatiner">
          <div className="Kontakt__radnoVremeDays">
            <p>Ponedeljak:</p>
            <p>08:00 - 17:00</p>
          </div>
          <div className="Kontakt__radnoVremeDays">
            <p>Utorak:</p>
            <p>08:00 - 17:00</p>
          </div>
          <div className="Kontakt__radnoVremeDays">
            <p>Sreda:</p>
            <p>08:00 - 17:00</p>
          </div>
          <div className="Kontakt__radnoVremeDays">
            <p>Četvrtak:</p>
            <p>08:00 - 17:00</p>
          </div>
          <div className="Kontakt__radnoVremeDays">
            <p>Petak:</p>
            <p>08:00 - 17:00</p>
          </div>
          <div className="Kontakt__radnoVremeDays">
            <p>Subota:</p>
            <p>09:00 - 13:00</p>
          </div>
          <div className="Kontakt__radnoVremeDays">
            <p>Nedelja:</p>
            <p>Ne radimo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
