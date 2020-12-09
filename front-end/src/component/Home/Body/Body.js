import React from "react";
import Posts from "./Posts/Posts";
import Quotes from "../Quotes/Quotes";
import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="row mr-0">
        <div class="col-md-3 inf-column columns pl-4">
          <div
            className=" d-flex"
            style={{ borderRadius: "20px", backgroundColor: "#e6e6e6" }}
          >
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
              width="50"
              height="45"
              className="rounded-circle"
              alt=""
            />
            <h6 className="user-name pt-2 pl-2 text-capitalize">
              mohammad momani
            </h6>
          </div>
          <div className="pt-4 pl-2">
            <p
              className="p-2 border border-success"
              style={{ borderRadius: "20px", backgroundColor: "#ffffffc4" }}
            >
              My Books
            </p>
            <p
              className="p-2 border border-success"
              style={{ borderRadius: "20px", backgroundColor: "#ffffffc4" }}
            >
              My Groups
            </p>
            <p
              className="p-2 border border-success"
              style={{ borderRadius: "20px", backgroundColor: "#ffffffc4" }}
            >
              Groups
            </p>
            <p
              className="p-2 border border-success"
              style={{ borderRadius: "20px", backgroundColor: "#ffffffc4" }}
            >
              Groups
            </p>
          </div>
        </div>
        <div className="col-md-5 post-column columns ">
          <Posts />
        </div>
        <div className="col-md-3 column columns d-block">
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default Body;
