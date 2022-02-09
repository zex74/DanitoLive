import React from "react";
import Slider from "./Slider/Slider";
import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import ProductWindow from "./ProductWindow/ProductWindow";
import Inspiration from "./Inspiration/Inspiration";
import CompanyPresentation from "./CompanyPresentation/CompanyPresentation";
import Tips from "./Tips/Tips";
import Footer from "./Footer/Footer";

function LandingPage({ scroll, setTipsData, setPathToTipsPage, setPageName, pathTo, setPathTo, setData, pageName }) {
  return (
    <div>
      <Slider />
      <LineAnimation header1={"Select your windows"} scroll={scroll} scrollY={200} />
      <ProductWindow
        setPageName={setPageName}
        pathTo={pathTo}
        setPathTo={setPathTo}
        setData={setData}
        pageName={pageName}
      />
      <LineAnimation header1={"Inspiration"} scroll={scroll} scrollY={800} />
      <Inspiration />
      <CompanyPresentation scroll={scroll} scrollY={2000} />
      <LineAnimation header1={"Tips"} scroll={scroll} scrollY={3000} />
      <Tips setTipsData={setTipsData} setPathToTipsPage={setPathToTipsPage} />
      <Footer />
    </div>
  );
}

export default LandingPage;
