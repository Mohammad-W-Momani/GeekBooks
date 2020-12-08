import React from "react";
import Posts from "./Posts/Posts";
import Quotes from "../Quotes/Quotes";
import "./Body.css";

const Body = () => {
  return (
    <div style={{background:"#e9ebee"}}>
    <div className="row mr-0">
      <div class="col-md-3 inf-column columns pl-4">
        <h2>Heading</h2>
        <p>
          Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus. Etiam porta sem malesuada magna mollis
          euismod. Donec sed odio dui.{" "}
        </p>
        <p>View details »</p>
      </div>
      <div className="col-md-5 post-column columns ">
        <Posts/>
      </div>
      <div class="col-md-3 column columns d-block">
        <Quotes/>
      </div>
    </div>
    </div>
  );
};

export default Body;
