import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../Styles/ProductWindow/ProductWindow.css";
import { ProductData } from "../../../ProductData";
import PRODUCTS from "../../../Komponente/NavBar/NavProducts/ProductNames";
import IMAGES from "../../../Komponente/NavBar/NavProducts/ProductImg";

function ProductWindow({ setPageName, setPathTo, setData }) {
  const [windowsPvc, setWindowsPvc] = useState(true);
  const [windowsWoodAluminium, setWindowsWoodAluminium] = useState(true);
  const [windowsAluminium, setWindowsAluminium] = useState(true);

  const [pvcDoors, setPvcDoors] = useState(true);
  const [aluminiumDoors, setAluminiumDoors] = useState(true);
  const [SafeDoors, setSafeDoors] = useState(true);

  const [fundermax, setFundermax] = useState(true);
  const [ventilsane, setVentilsane] = useState(true);
  const [glass, setGlass] = useState(true);
  const [granit, setGranit] = useState(true);

  const [floorSliding, setFloorSliding] = useState(true);
  const [uskocno, setUskocno] = useState(true);
  const [acordian, setAcordian] = useState(true);

  const selectProduct = (product) => {
    if (product === "windowsPvc") {
      setWindowsPvc(false);
      setWindowsWoodAluminium(true);
      setWindowsAluminium(true);
    }
    if (product === "windowsWoodAluminium") {
      setWindowsWoodAluminium(false);
      setWindowsPvc(true);
      setWindowsAluminium(true);
    }
    if (product === "windowsAluminium") {
      setWindowsWoodAluminium(true);
      setWindowsPvc(true);
      setWindowsAluminium(false);
    }
    if (product === "doorsPvc") {
      setPvcDoors(false);
      setSafeDoors(true);
      setAluminiumDoors(true);
    }
    if (product === "doorsAluminium") {
      setPvcDoors(true);
      setSafeDoors(true);
      setAluminiumDoors(false);
    }
    if (product === "safeDoors") {
      setPvcDoors(true);
      setSafeDoors(false);
      setAluminiumDoors(true);
    }

    if (product === "fundermax") {
      setFundermax(false);
      setVentilsane(true);
      setGlass(true);
      setGranit(true);
    }
    if (product === "ventilisane") {
      setFundermax(true);
      setVentilsane(false);
      setGlass(true);
      setGranit(true);
    }
    if (product === "glass") {
      setFundermax(true);
      setVentilsane(true);
      setGlass(false);
      setGranit(true);
    }
    if (product === "granit") {
      setFundermax(true);
      setVentilsane(true);
      setGlass(true);
      setGranit(false);
    }

    if (product === "podnoKlizni") {
      setFloorSliding(false);
      setUskocno(true);
      setAcordian(true);
    }
    if (product === "uskocnoKlizni") {
      setFloorSliding(true);
      setUskocno(false);
      setAcordian(true);
    }
    if (product === "acordian") {
      setFloorSliding(true);
      setUskocno(true);
      setAcordian(false);
    }
  };

  const setProductPath = (value) => {
    const newData = ProductData.filter((product) => {
      return product.name === value;
    });
    setData(...newData);
    Object.values(PRODUCTS.allProducts).forEach((product) => {
      if (product === value) {
        setPathTo(`/${product}`);
        setPageName(value);
      } else return "";
    });
  };

  return (
    <div className="ProductWindow">
      <div className="ProductWindow__container">
        {/* 1 Polje */}
        <div className="ProductWindow__product">
          <img src={IMAGES.windowPvcImg} alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={windowsPvc ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("windowsPvc")}>
                {PRODUCTS.pvcProzori}
              </button>
              {windowsPvc ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.pvcProzor1}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pvcProzor1}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.pvcProzor2}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pvcProzor2}
                  </Link>
                </div>
              )}
            </div>

            <div className="ProductWindow__Buttons">
              <button
                className={windowsAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsAluminium")}
              >
                {PRODUCTS.aluminiumProzori}
              </button>
              {windowsAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.aluminiumProzor1}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluminiumProzor1}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.aluminiumProzor2}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluminiumProzor2}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.aluminiumProzor3}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluminiumProzor3}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.aluminiumProzor4}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluminiumProzor4}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={windowsWoodAluminium ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("windowsWoodAluminium")}
              >
                {PRODUCTS.drvoAluminiumProzori}
              </button>

              {windowsWoodAluminium ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.drvoAluminiumProzor1}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.drvoAluminiumProzor1}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 2 Polje */}
        <div className="ProductWindow__product">
          <img src={IMAGES.doorAluminiumImg} alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={pvcDoors ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("doorsPvc")}>
                {PRODUCTS.pvcVrata}
              </button>
              {pvcDoors ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.ulaznaVrata}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.ulaznaVrata}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.pregradnaVrata}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pregradnaVrata}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={aluminiumDoors ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("doorsAluminium")}
              >
                {PRODUCTS.aluminiumVrata}
              </button>

              {aluminiumDoors ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.vrataHladanProfil}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.vrataHladanProfil}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.vrataProfilTermo}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.vrataProfilTermo}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.vrataSkrivenoKrilo}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.vrataSkrivenoKrilo}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={SafeDoors ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("safeDoors")}>
                {PRODUCTS.sigurnosnaVrata}
              </button>

              {SafeDoors ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.celicnaVrata}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.celicnaVrata}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 3 Polje Fasade */}
        <div className="ProductWindow__product">
          <img src={IMAGES.fasadePVC} alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button className={fundermax ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("fundermax")}>
                {PRODUCTS.fundermaxFasade}
              </button>
              {fundermax ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.FunderFasade}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.FunderFasade}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button
                className={ventilsane ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("ventilisane")}
              >
                {PRODUCTS.ventilisaneAlucobondFasade}
              </button>

              {ventilsane ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.VentilFasade}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.VentilFasade}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={glass ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("glass")}>
                {PRODUCTS.stakleneFasade}
              </button>

              {glass ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.strukovna}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.strukovna}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.standardna}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.standardna}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={granit ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("granit")}>
                {PRODUCTS.granitFasade}
              </button>

              {granit ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.granit}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.granit}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 4 Polje */}
        <div className="ProductWindow__product">
          <img src={IMAGES.teraseALUMINIUM} alt="window img" />
          <div className="ProductWindow__ButtonsContainer">
            <div className="ProductWindow__Buttons">
              <button
                className={floorSliding ? "buttonClose" : "buttonOpen"}
                onClick={() => selectProduct("podnoKlizni")}
              >
                {PRODUCTS.podnoKlizni}
              </button>
              {floorSliding ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.pvcVekaSlide}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pvcVekaSlide}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.aluUltraGlide}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluUltraGlide}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.aluVgPlus}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluVgPlus}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={uskocno ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("uskocnoKlizni")}>
                {PRODUCTS.uskocnoKlizni}
              </button>

              {uskocno ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.pvcVekaSlide}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pvcVekaSlide}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.aluVisoglide}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.aluVisoglide}
                  </Link>
                </div>
              )}
            </div>
            <div className="ProductWindow__Buttons">
              <button className={acordian ? "buttonClose" : "buttonOpen"} onClick={() => selectProduct("acordian")}>
                {PRODUCTS.acordianHarmonika}
              </button>

              {acordian ? null : (
                <div className="ProductWindow__ButtonsSecond">
                  <Link
                    to={`/${PRODUCTS.allProducts.pvcSmatiaM9800}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pvcSmatiaM9800}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.pvcSmatiaM1980}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.pvcSmatiaM1980}
                  </Link>
                  <Link
                    to={`/${PRODUCTS.allProducts.panoramaAliplast}`}
                    onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                  >
                    {PRODUCTS.allProducts.panoramaAliplast}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ProductWindow__productHeaders">
        <p>Prozori</p>
        <p>Vrata</p>
        <p>Fasade</p>
        <p>Klizni Sistemi</p>
      </div>
    </div>
  );
}

export default ProductWindow;
