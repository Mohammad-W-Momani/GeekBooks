import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LeftSide = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const token_username = decoded.username;

  const linksStyle = {
    textDecoration: "none",
    color: "black",
  };
  const linksPargStyle = {
    borderRadius: "20px",
    backgroundColor: "#ffffffc4",
  };
  return (
    <>
      <div className="d-flex ">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
          width="50"
          height="45"
          className="rounded-circle"
          alt="User Image"
        />
        <h6 className=" pt-2 pl-2 ">{token_username}</h6>
      </div>
      <div className="pt-4 pl-2">
        <Link to="/mybooks" style={linksStyle}>
          <p className="p-2 border border-success" style={linksPargStyle}>
            My Books
          </p>
        </Link>

        <Link to="/mygroups" style={linksStyle}>
          <p className="p-2 border border-success" style={linksPargStyle}>
            My Groups
          </p>
        </Link>

        <Link to="/challenge" style={linksStyle}>
          <p className="p-2 border border-success" style={linksPargStyle}>
            Reading challenge
          </p>
        </Link>

      </div>
    </>
  );
};

export default LeftSide;
