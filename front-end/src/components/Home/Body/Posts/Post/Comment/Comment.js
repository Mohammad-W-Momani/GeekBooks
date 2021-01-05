import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import CreateComment from "./CreateComment";
import "./Comment.css";
import LikeAndDislike from "./LikeAndDislike";
import DeleteComment from "./DeleteComment";
import UpdateComment from "./UpdateComment";

const Comment = (props) => {
  //Post attributes from the post component
  const { postAttr, comment } = props;

  // A state hook for updateComment mode
  const [editComment, setEditComment] = useState(false);

  const token = localStorage.getItem("token");
  return (
    <div className="comments pb-3">
      <div>
        <div className="d-flex flex-row mb-2">
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEAmVMcXnv146RjpoVMLW2bVXyJjfc3Re-Q&usqp=CAU"
            width="40"
            height="45"
            className="rounded-circle"
            alt=""
          />
          <div className="d-flex flex-column ml-2">
            {" "}
            <span className="name">{comment.username}</span>{" "}
            <DeleteComment postAttr={postAttr} comment={comment} />
            <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
              onClick={() => {
                if (!editComment) {
                  setEditComment(true);
                  return;
                }
                setEditComment(false);
              }}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            {editComment ? (
              <UpdateComment
                postAttr={postAttr}
                commentElement={comment}
                editComment={editComment}
                setEditComment={setEditComment}
              />
            ) : (
              <small className="comment-text pr-2 pt-2 pb-2">
                {comment.comment}
              </small>
            )}
            <div className="d-flex flex-row align-items-center status">
              {" "}
              <LikeAndDislike comment={comment} />
              <small className="pl-3">{comment.created_time}</small>{" "}
            </div>
          </div>
        </div>
        {/* Input field for creating comments */}
        <CreateComment post_id={postAttr.post_id} />
      </div>
    </div>
  );
};

export default Comment;
