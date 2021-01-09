import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import CreateComment from "./CreateComment";
import "./Comment.css";
import LikeAndDislike from "./LikeAndDislike";
import UpdateComment from "./UpdateComment";

const Comment = (props) => {
  //Post attributes from the post component
  const { postAttr, comment } = props;

  // A state hook for updateComment mode
  const [editComment, setEditComment] = useState(false);

  const token = localStorage.getItem("token");
  const deleteComment = () => {
    axios
      .delete(`comment/${postAttr.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
  };
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
          <div className="d-flex flex-column ml-2" id="commentBox">
            {" "}
            <span className="name">{comment.username}</span>{" "}
            <Dropdown className="dropdownComment">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    if (!editComment) {
                      setEditComment(true);
                      return;
                    }
                    setEditComment(false);
                  }}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={deleteComment}>
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {editComment ? (
              <UpdateComment
                postAttr={postAttr}
                commentElement={comment}
                editComment={editComment}
                setEditComment={setEditComment}
              />
            ) : (
              <p className="comment-text pr-2 pt-2 pb-2">
                {comment.comment}
              </p>
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
