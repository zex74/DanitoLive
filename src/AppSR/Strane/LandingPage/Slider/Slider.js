import React, { useState } from "react";
import "../../../../Styles/Slider/Slider.css";
import SliderImg from "../../../../Img/bannertop_facebook_1920x940_en.jpg";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: SliderImg,
    image: "image",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "https://www.drutex.eu/media/_upload/glowna_strona/banery/20171219/video/1920x940-firma-animacja.mp4",
    video: "video",
  },
  {
    label: "Goč, Serbia",
    imgPath: "https://www.drutex.eu/media/_upload/produkty/zaluzje_fasadowe/zaluzje__www.mp4",
    video: "video",
  },
  {
    label: "aassd, Serbia",
    imgPath: "https://www.drutex.eu/media/_upload/promocja_mb86/animacja_mb86si_promocjana_www__2.mp4",
    video: "video",
  },
  {
    label: "asdd, Serbia",
    imgPath: "https://www.drutex.eu/media/_upload/glowna_strona/banery/animacja_iglo_energy_classic_masa_antracyt.mp4",
    video: "video",
  },
  {
    label: "ascd, Serbia",
    imgPath: "https://www.drutex.eu/media/_upload/glowna_strona/banery/20171219/video/1920x940-rolety.mp4",
    video: "video",
  },
  {
    label: "aswd, Serbia",
    imgPath: "https://www.drutex.eu/media/_upload/praca_handlowiec_2021.jpg",
    image: "image",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="Slider">
      <AutoPlaySwipeableViews
        className="Slider__animeContainer"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div className="Slider__container" key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="img__container">
                {step.image ? (
                  <img src={step.imgPath} alt={step.label} />
                ) : (
                  <video muted={true} autoPlay={true} src={step.imgPath}></video>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className="dotContainer">
        <span className={activeStep === 0 ? "active" : "dot"} onClick={() => setActiveStep(0)}></span>
        <span className={activeStep === 1 ? "active" : "dot"} onClick={() => setActiveStep(1)}></span>
        <span className={activeStep === 2 ? "active" : "dot"} onClick={() => setActiveStep(2)}></span>
        <span className={activeStep === 3 ? "active" : "dot"} onClick={() => setActiveStep(3)}></span>
        <span className={activeStep === 4 ? "active" : "dot"} onClick={() => setActiveStep(4)}></span>
        <span className={activeStep === 5 ? "active" : "dot"} onClick={() => setActiveStep(5)}></span>
        <span className={activeStep === 6 ? "active" : "dot"} onClick={() => setActiveStep(6)}></span>
      </div>
    </div>
  );
}

export default Slider;
