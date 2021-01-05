import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import FavoriteIcon from "@material-ui/icons/Favorite";

const PostLike = (props) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  // The state of the post from the props 
  const {postAttr} = props

  // State for like and dislike
  const [userDidLike, setUserDidLike] = useState(false);

  // State hook for the post likes 
  const [likes, setLikes] = useState(0);

  const getPostLikes = () => {
    axios 
      .get(`http://localhost:5000/post/like/${postAttr.post_id}`,  {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        setLikes(response.data.length);
      })
      .catch((err) => {
        throw err;
      })
  }

  const like = () => {
    axios
      .post(`http://localhost:5000/post/${postAttr.post_id}/like`,{}, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response)
        if (response.data === "like") {
          setUserDidLike(true);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  const disLike = () => {
    axios
      .delete(`http://localhost:5000/post/${postAttr.post_id}/dislike`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setUserDidLike(false);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getPostLikes()
  },[])
  return (
    <div>
      <div className="d-flex ">
        {" "}
        <div className="pl-2">
          <a style={{ cursor: "pointer" }}>
            <FavoriteIcon
              className="text-danger "
              onClick={userDidLike ? disLike : like}
            />{" "}
          </a>
          {likes}
        </div>
      </div>{" "}
    </div>
  );
};

export default PostLike;
