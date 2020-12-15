import React, { useEffect, useState } from "react";
import Axios from "axios";
import jwt_decode from "jwt-decode";

function FollowButton({ usernameParams }) {
  const [followUp, setFollowUp] = useState();
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const token_username = decoded.username;

  const follow = (e) => {
    e.preventDefault();
    Axios.post(
      `/${usernameParams}/Follows`,
      {},
      {
        headers: { Authorization: `Basic ${token}` },
      }
    )
      .then((response) => {
        setFollowUp(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="bg-light d-flex justify-content-end pt-3 pr-3"
      style={{ height: "100px" }}
    >
      <button
        type="button"
        style={{ height: "50px", borderRadius: "200px" }}
        onClick={follow}
      >
        Follow
      </button>
    </div>
  );
}

export default FollowButton;
