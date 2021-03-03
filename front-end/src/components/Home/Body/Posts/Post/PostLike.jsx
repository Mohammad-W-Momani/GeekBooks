import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import FavoriteIcon from "@material-ui/icons/Favorite";

const PostLike = (props) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const { username } = decoded;

  // The state of the post from the props
  const { postAttr } = props;

  // State for like and dislike
  const [userDidLike, setUserDidLike] = useState(false);

  // State hook for the post likes
  const [likes, setLikes] = useState(0);

  //Stata hook as an array for saving the users who liked the post
  const [persons, setPersons] = useState([]);
  

  const getPostLikes = () => {
    axios
      .get(`post/like/${postAttr.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        setLikes(response.data.length);
        setPersons([...response.data])
        // console.log(postAttr.post_id)
        // console.log(response.data[0].username)
      })
      .catch((err) => {
        throw err;
      });
  }; 

  const like = () => {
    axios
      .post(
        `post/${postAttr.post_id}/like`,
        {},
        {
          headers: { Authorization: `Basic ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
        setUserDidLike(true)
      })
      .catch((err) => {
        throw err;
      });
  };
  
  useEffect(() => {
    getPostLikes();
  }, [userDidLike]);
  return (
    <div>
      <div className="d-flex ">
        {" "}
        <div className="pl-2">
          {userDidLike ? (
            <a style={{ cursor: "pointer" }}>
            <FavoriteIcon className="text-success " onClick={like} />{" "}
          </a>
            
          ) : (
            <a style={{ cursor: "pointer" }}>
              <FavoriteIcon className="text-danger " onClick={like} />{" "}
            </a>
          )}

         {" "} {likes}
        </div>
      </div>{" "}
    </div>
  );
};

export default PostLike;
