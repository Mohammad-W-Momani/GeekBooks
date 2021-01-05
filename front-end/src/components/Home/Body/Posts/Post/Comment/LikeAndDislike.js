import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import jwt_decode from "jwt-decode";
const CommentLike = (props) => {
  const { comment } = props;
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  //State for liking and disliking the comment
  const [likedComment, setLikedComment] = useState(false);

  // State hook for getting the comment likes 
  const [commentLikes, setCommentLikes] = useState(0);

  const addLike = () => {
    axios
      .post(`http://localhost:5000/comment/${comment.comment_id}/like`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        setLikedComment(true);
      })
      .catch((err) => {
        throw err;
      });
  };
  const dislike = () => {
    axios
      .delete(`http://localhost:5000/comment/${comment.comment_id}/dislike`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        setLikedComment(false);
      })
      .catch((err) => {
        throw err;
      });
  };
  const getCommentLikes = () => {
    axios
      .get(`http://localhost:5000/comment/${comment.comment_id}/commentlikes`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        setCommentLikes(response.data.length);
      })
      .catch((err) => {
        throw err;
      });
  }
  useEffect(() => {
    getCommentLikes()
  },[likedComment])
  return (
    <div>
      <span style={{ cursor: "pointer" }}>
        <FavoriteIcon
          className="text-danger"
          onClick={likedComment ? dislike : addLike}
        />
      </span>{" "}
      {commentLikes}
    </div>
  );
};

export default CommentLike;
