import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const UpdateComment = (props) => {
  const { postAttr, commentElement, editcomment, setEditComment } = props;
  const token = localStorage.getItem("token");

  // State hook for rendering the comment while in the edit mode
  const [commentState, setCommentState] = useState(commentElement.comment);

  const updateComment = () => {
    axios
      .put(
        `/comment/${commentElement.comment_id}`,
        {comment : commentState},
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

  return (
    <div>
      <div
        className="well well-sm well-social-post col-md-11 p-0"
        style={{ borderRadius: "15px" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateComment();
            setEditComment(false)
            setCommentState()
          }}
        >
          <textarea
            className="form-control shadow-none"
            style={{ borderRadius: "15px" }}
            value={commentState}
            onChange={(e) => {
              setCommentState(e.target.value);
            }}
          ></textarea>
          <div
            className="list-inline post-actions p-1 "
            style={{ borderRadius: "15px" }}
          >
            <div className=" d-flex justify-content-start">
              <button
                className={`btn btn-success`}
                style={{ borderRadius: "15px" }}
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateComment;
