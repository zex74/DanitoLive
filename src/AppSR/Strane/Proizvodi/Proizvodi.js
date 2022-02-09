import React, { useEffect } from "react";
import "../../../Styles/Proizvodi/Proizvodi.css";

import LineAnimation from "../../Komponente/LineAnimation/LineAnimation";
import Options from "./Options";

import ProfileIcon from "../../../Img/Icons/Profile.png";
import GlassIcon from "../../../Img/Icons/Glass.png";
import FittingsIcon from "../../../Img/Icons/Fittings.png";

function ProductPage({ scroll, pageName, data }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  console.log(data);
  return (
    <div className="ProductPage">
      <div className="ProductPage__container">
        <div className="ProductPage__imgContainer">
          <img src={data.imgCover} alt="danito window cover" />
        </div>
        <LineAnimation header1={pageName} scroll={scroll} scrollY={200} />
        <div className="ProductPage__videoOptionsContainer">
          <div className="ProductPage__videoContainer">
            {data.video || data.imgVideo ? (
              <video autoPlay src={data.video || data.imgVideo}></video>
            ) : (
              <img src={data.videoImg} alt="" />
            )}
          </div>
          <div className="ProductPage__optionsContainer">
            <Options optionsContent={data} pageName={pageName} />
          </div>
        </div>
        <LineAnimation header1={"Karakteristike"} scroll={scroll} scrollY={1000} />
        <div className="ProductPage__materialContainer">
          <div className="ProductPage__material">
            <img src={ProfileIcon} alt="profile icon" />
            <div className="ProductPage__Line"></div>
            <p>{data.material.first}</p>
          </div>
          <div className="ProductPage__material">
            <img src={GlassIcon} alt="profile icon" />
            <div className="ProductPage__Line"></div>
            <p>{data.material.second}</p>
          </div>
          <div className="ProductPage__material">
            <img src={FittingsIcon} alt="profile icon" />
            <div className="ProductPage__Line"></div>
            <p>{data.material.third}</p>
          </div>
        </div>
        {data.panel ? <LineAnimation header1={"Paneli"} scroll={scroll} scrollY={1600} /> : null}
        {data.panel ? (
          <div className="ProductPage__profiles">
            {data.panel.map((panel) => {
              return (
                <div className="ProductPage__panelContainer">
                  <div className="ProductPage__profileInfo">
                    <h2>{panel.name}</h2>
                    <p>{panel.text}</p>
                  </div>
                  <div className="ProductPage__profileImgContainer">
                    {panel.image.map((img) => {
                      return (
                        <div className="ProductPage__profile">
                          <img src={img} alt="img profile" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductPage;
