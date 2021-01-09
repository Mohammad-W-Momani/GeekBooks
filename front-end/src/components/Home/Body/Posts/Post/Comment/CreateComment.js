import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AddBoxIcon from "@material-ui/icons/AddBox";
const CreateComment = (props) => {
  // The setCommentsArray function from the post component that addes the comment to the comments array
  const {post_id} = props;
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const userData = decoded.username;
  const [commentInfo, setCommentInfo] = useState({
    comment: "",
    username: userData,
  });
  const createComment = () => {
    if (commentInfo.comment === "") {
      console.log("Please add a comment");
      return;
    }
    axios
      .post(
        `http://localhost:5000/comment/${post_id}/createcomment`,
        commentInfo,
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
    setCommentInfo({ ...commentInfo, comment: "" });
  };
  return (
    <div>
      <div className="comment-input d-flex">
        {" "}
        <input
          type="text"
          className="form-control"
          value={commentInfo.comment}
          onChange={(e) => {
            setCommentInfo({ comment: e.target.value });
          }}
        />
        <div className="fonts">
          <AddBoxIcon
            className="text-success"
            style={{ width: "40px", height: "40px" }}
            onClick={createComment}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
