import React, { useState } from "react";
import Axios from "axios";

function FollowButton({ usernameParams }) {
  const [followUp, setFollowUp] = useState();
  const token = localStorage.getItem("token");

  const follow = () => {
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
        follow
      </button>
    </div>
  );
}

export default FollowButton;
