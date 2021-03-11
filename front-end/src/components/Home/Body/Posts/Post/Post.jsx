import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";
import jwt_decode from "jwt-decode";
import { Dropdown } from "react-bootstrap";
import Comment from "./Comment/Comment";
import PostLike from "./PostLike";
import UpdatePost from "./UpdatePost";
import CreateComment from "./Comment/CreateComment";
import "./Post.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const Post = ({ getUserPosts, getPosts, setGetPosts, postElement }) => {
  const token = localStorage.getItem("token");

  // postAttr is the props that is set from the Posts component and contains every post as an element
  const postAttr = postElement;

  // State hook for editing the post
  const [editPostMode, setEditPostMode] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  // state hook which is an array that have comments of the post
  const [commentsArray, setCommentsArray] = useState([]);

  // State hook for rendering the comments onClick if the state is true (toggle)
  const [renderComments, setRenderComments] = useState(false);

  //State hook for displaying the editAndDelete dropdown menu
  const [editDropDown, setEditDropDown] = useState(false);

  // Getting the comments on the post by the post_id and set the state hook to the array of comments
  const getPostComments = () => {
    axios
      .get(`/post/comment/${postAttr.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        if (response.data === "Add new Comments ") {
          console.log(response.data);
          return;
        }
        setCommentsArray([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
  };
  const deletePost = () => {
    axios
      .delete(`/post/${postAttr.post_id}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        console.log(response);
        setGetPosts(true);
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getPostComments();
  }, [renderComments]);

  // Map method on the state hook which contains the comments of the post (By post_id) comment information is passed to the Comment component
  const renderPostComments = commentsArray.map((elem, i) => {
    return <Comment comment={elem} postAttr={postAttr} key={i + 1} />;
  });
  return (
    <div className="col-md-offset-3 col-md-12 col-xs-12">
      <div className="card" style={{ borderRadius: "20px" }}>
        <div className="d-flex justify-content-between p-2 px-3">
          <div className="d-flex flex-row align-items-center">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
              width="50"
              height="45"
              className="rounded-circle"
              alt=""
            />
            <div className="d-flex flex-column ml-2">
              {" "}
              <span className="font-weight-bold">{postAttr.username}</span>{" "}
            </div>
          </div>
          <div className="d-flex flex-row mt-1 ellipsis">
            {" "}
            <h6 className="mr-2">{postAttr.created_time.slice(11, 16)}</h6>
            {"  "}
            
            <div className="post-dropdown">
              <button onClick={() => setDropdown(!dropdown)} className="post-dropbtn">
              <i className="fa fa-chevron-down" style={{fontSize:"1.2rem"}}></i>
              </button>
              <div
                id="myDropdown"
                className={`post-dropdown-content ${dropdown ? "post-show":""}`}
              >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="p-2">
          {editPostMode ? (
            <UpdatePost
              postAttr={postAttr}
              setEditPostMode={setEditPostMode}
              setGetPosts={setGetPosts}
            />
          ) : (
            <textarea
              readOnly
              className="form-control shadow-none"
              rows="4"
              value={postAttr.post}
              style={{
                border: "1px solid gray",
                borderRadius: "15px",
                resize: "none",
              }}
            >
            </textarea>
          )}
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            {/* The Like component  */}
            <PostLike postAttr={postAttr} />
            {/* The comments component */}
            <div
              className="pr-2 d-flex"
              style={{ fontSize: "1.3rem" }}
              onClick={() => {
                setRenderComments(!renderComments);
              }}
            >
              <small style={{ marginRight: "22%" }}>
                {renderPostComments.length}{" "}
              </small>
              <i
                className="far fa-comment-alt pt-1"
                style={{ cursor: "pointer" }}
              ></i>
            </div>{" "}
          </div>
          <hr />
          {renderComments ? renderPostComments : null}
          <CreateComment post_id={postAttr.post_id} />
        </div>
      </div>
    </div>
  );
};
export default Post;
