import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import OtherProfile from "./Profiles/OtherProfile/OtherProfile";
import MyProfile from "./Profiles/MyProfile/MyProfile";
import "./Profile.css";
const Profile = () => {
  let { username } = useParams();
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const token_username = decoded.username;

  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const getUser = () => {
    Axios.get(`${username}`, {
      headers: { Authorization: `Basic ${token}` },
    })
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setUserName(response.data[0].username);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  const getfollowing = () => {
    Axios.get(`${username}/Following`)
      .then((response) => {
        setFollowing(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  const getfollowers = () => {
    Axios.get(`${username}/Followers`)
      .then((response) => {
        setFollowers(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    getUser();
  }, [getfollowing(), getfollowers()]);
  if (userName === token_username) {
    return user.map((userInf) => (
      <MyProfile
        key={userInf.user_id}
        {...userInf}
        following={following}
        followers={followers}
        usernameParams={username}
      />
    ));
  } else if (userName.length === 0) {
    return (
      <div>
        <h1
          style={{ textAlign: "center", backgroundColor: "white", margin: "0" }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-danger"
          >
            Go to Home{" "}
          </Link>
        </h1>
        <img
          src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg"
          alt=""
          width="100%"
          height="580px"
        />
      </div>
    );
  } else {
    return user.map((userInf) => (
      <OtherProfile
        key={userInf.user_id}
        {...userInf}
        following={following}
        followers={followers}
        usernameParams={username}
      />
    ));
  }
};

export default Profile;

