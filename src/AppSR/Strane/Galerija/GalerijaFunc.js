import React, { useState } from "react";
import "../../../Styles/GalerijaFunc/GalerijaFunc.css";

import Backdrop from "@mui/material/Backdrop";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function GalerijaFunc({ ImgObjekti }) {
  const [open, setOpen] = useState(false);
  const [imageModal, setImageModal] = useState("");

  const setModalOpenImage = (image) => {
    setImageModal(image);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setImageModal("");
  };

  const changeImgLeft = () => {
    const index = ImgObjekti.findIndex((img) => img === imageModal);
    const lastIndex = ImgObjekti.length - 1;
    if (ImgObjekti[index - 1] === undefined) {
      setImageModal(ImgObjekti[lastIndex]);
    } else {
      setImageModal(ImgObjekti[index - 1]);
    }
  };
  const changeImgRight = () => {
    const index = ImgObjekti.findIndex((img) => img === imageModal);
    if (ImgObjekti[index + 1] === undefined) {
      setImageModal(ImgObjekti[0]);
    } else {
      setImageModal(ImgObjekti[index + 1]);
    }
  };
  return (
    <div className="Images">
      {ImgObjekti.map((item) => {
        return (
          <img
            className="Images__rowImg"
            onClick={() => setModalOpenImage(item)}
            key={item}
            alt="objekti images"
            src={item}
          ></img>
        );
      })}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
      {imageModal ? (
        <div className="Images__selectedImgContainer">
          <ArrowBackIosNewIcon onClick={changeImgLeft} className="svg__IconLeft" />
          <img onClick={changeImgRight} style={{ width: "900px" }} src={imageModal} alt="selected img"></img>
          <ArrowForwardIosIcon onClick={changeImgRight} className="svg__IconRight" />
        </div>
      ) : null}
    </div>
  );
}

export default GalerijaFunc;
