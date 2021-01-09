import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./CreatePost.css";
const CreatePost = (props) => {
  const { getPosts, setGetPosts } = props;
  // The state hook which is an array of the posts and the function that sets that array from the Posts component

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const userData = decoded.username;
  const [postInfo, setPostInfo] = useState({
    username: userData,
    post_id: null,
    post: "",
  });
  const addPostToDataBase = () => {
    axios
      .post("http://localhost:5000/post/createpost", postInfo, {
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
    <div
      className="col-md-offset-3 col-md-12 col-xs-12 pr-1"
      style={{ borderRadius: "15px", paddingLeft: "45px" }}
    >
      <div
        className="well well-sm well-social-post col-md-11 p-0"
        style={{ borderRadius: "15px" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addPostToDataBase();
            // condition for rendering the posts by changing the state from the posts component
            // Rendering all the posts when adding a new post
            getPosts ? setGetPosts(false) : setGetPosts(true);
            setPostInfo({ ...postInfo, post: "" });
          }}
        >
          <textarea
            className="form-control shadow-none"
            style={{ borderRadius: "15px" }}
            placeholder="What's on your mind?"
            value={postInfo.post}
            onChange={(e) => {
              setPostInfo({ ...postInfo, post: e.target.value });
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
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
