import * as React from "react";
import "../../../../Styles/Tips/Tips.css";
import { TipsData } from "../../../TipsData";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Tips({ setTipsData }) {
  return (
    <div className="Tips">
      {TipsData.map((data) => {
        return (
          <Card
            style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            sx={{ maxWidth: 500 }}
          >
            <CardMedia component="img" alt="news img" height="300" image={data.coverImg} />
            <CardContent>
              <div className="Tips__line"></div>
              <h3>{data.name}</h3>
              <div className="Tips__line"></div>
              <p>{data.text[0].split(" ").slice(0, 20).join(" ")}...</p>
            </CardContent>
            <div className="Tips__moreDate">
              <Link onClick={() => setTipsData(data)} to="/TipsPage">
                Read
              </Link>
              <p>{data.date}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Tips;
