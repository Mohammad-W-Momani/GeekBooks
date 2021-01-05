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
      .get(`http://localhost:5000/post/like/${postAttr.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        setLikes(response.data.length);
        setPersons([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
  }; 

  const like = () => {
    axios
      .post(
        `http://localhost:5000/post/${postAttr.post_id}/like`,
        {},
        {
          headers: { Authorization: `Basic ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
  };
  const checkLiked = () => {
    if(!persons.length){
      setUserDidLike(false)
      return;
    }
    for(let i = 0; i = persons.length-1; i++){
      if(persons[i].username === username){
        setUserDidLike(true)
        return;
      }
      setUserDidLike(false)
    }

  }
  useEffect(() => {
    getPostLikes();
    checkLiked()
  }, []);
  return (
    <div>
      <div className="d-flex ">
        {" "}
        <div className="pl-2">
          {userDidLike ? (
            <a href="#" onClick={like}>dislike</a>
            
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
