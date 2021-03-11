import React from "react";
import LeftSide from "./Sidebars/LeftSide";
import Posts from "./Posts/Posts";
import Quotes from "./Sidebars/Quotes/Quotes";
import "./Body.css";

const Body = () => {
  const LeftSideStyle = {
    position: "fixed",
    textTransform: "capitalize",
    width: "20%",
    marginLeft: "1%",
  };
  return (
    <div
      className="row "
      style={{
        margin: "8% 0",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
      }}
    >
      <div style={{ position: "relative" }}>
        <div style={LeftSideStyle}>
          <LeftSide />
        </div>
      </div>
      <div style={{margin:"0 18% 0 10%"}}>
        <Posts />
      </div>
      <div>
        <Quotes />
      </div>
    </div>
  );
};

export default Body;
