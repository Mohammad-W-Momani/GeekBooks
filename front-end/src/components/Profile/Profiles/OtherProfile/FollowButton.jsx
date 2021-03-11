import React, { useState } from "react";
import axios from "axios";

const FollowButton = ({ usernameParams, followers }) => {
  const [followUp, setFollowUp] = useState();
  const token = localStorage.getItem("token");
  
  const follow = () => {
    axios.post(
      `/${usernameParams}/follows`,
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
        className="btn btn-success"
        style={{ height: "50px", borderRadius: "200px", zIndex:"5" }}
        onClick={follow}
      >
        follow
      </button>
    </div>
  );
};

export default FollowButton;

