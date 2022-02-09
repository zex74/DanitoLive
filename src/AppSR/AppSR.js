import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Proizvodi from "./Strane/Proizvodi/Proizvodi";
import "../Styles/AppLang/AppLang.css";
import ScrollToTop from "../ScrollToTop";

import NavFirst from "./Komponente/NavBar/NavFirst/NavFirst";
import NavSecond from "./Komponente/NavBar/NavSecond/NavSecond";
import NavProduct from "./Komponente/NavBar/NavProducts/NavProducts";

import LandingPage from "./Strane/LandingPage/LandingPage";
import About from "./Strane/About/About";
import Galerija from "./Strane/Galerija/Galerija";
import TipsPage from "./Strane/TipsPage/TipsPage";
import Kontakt from "./Strane/Kontakt/Kontakt";

function AppSR() {
  const [scroll, setScroll] = useState(0);
  const [navRightOpen, setNavRightOpen] = useState(false);

  const [pathTo, setPathTo] = useState("false");
  const [pageName, setPageName] = useState("");

  const [pathToTipsPage, setPathToTipsPage] = useState("");
  const [tipsData, setTipsData] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, [scroll]);

  return (
    <div className="AppLang">
      <Router>
        <ScrollToTop />
        <NavFirst />
        <div className="AppLang__containerFirst">
          <NavProduct
            setData={setData}
            setPageName={setPageName}
            pathTo={pathTo}
            setPathTo={setPathTo}
            navRightOpen={navRightOpen}
          />
          <div className="AppLang__right">
            <NavSecond navRightOpen={navRightOpen} setNavRightOpen={setNavRightOpen} />
            <Switch>
              <Route path={pathTo}>
                <Proizvodi data={data} pageName={pageName} scroll={scroll} />
              </Route>
              <Route path="/galerija">
                <Galerija scroll={scroll} />
              </Route>
              <Route path="/onama">
                <About scroll={scroll} />
              </Route>
              <Route path="/TipsPage">
                <TipsPage scroll={scroll} tipsData={tipsData} />
              </Route>
              <Route path="/kontakt">
                <Kontakt scroll={scroll} />
              </Route>
              <Route path="/">
                <LandingPage
                  setPageName={setPageName}
                  pathTo={pathTo}
                  setPathTo={setPathTo}
                  setTipsData={setTipsData}
                  setData={setData}
                  setPathToTipsPage={setPathToTipsPage}
                  scroll={scroll}
                  pageName={pageName}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default AppSR;
