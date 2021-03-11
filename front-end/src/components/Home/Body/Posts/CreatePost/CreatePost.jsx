import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { validation } from "../Validate/Validation";
import "./CreatePost.css";
const CreatePost = ({ getPosts, setGetPosts }) => {
  const token = localStorage.getItem("token");
  const [postInfo, setPostInfo] = useState({
    post: "",
  });
  const [{ error }, setError] = useState({});

  const addPostToDataBase = () => {
    axios
      .post("/post/createpost", postInfo, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then()
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div
      style={{
        margin: "0 6% 3%",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPostToDataBase();
          setGetPosts(!getPosts);
        }}
      >
        <textarea
          className="form-control shadow-none"
          rows="3"
          value={postInfo.post}
          style={{
            border: error ? "1px solid red" : "1px solid gray",
            borderRadius: "15px",
            resize: "none",
          }}
          placeholder="What's on your mind?"
          minLength="10"
          maxLength="251"
          onChange={(e) => {
            setPostInfo({ post: e.target.value });
            validation(setError, e.target.value, 250, 10);
          }}
        ></textarea>
        <div
          className=" list-inline post-actions p-1 "
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(95, 95, 95, 0.111)",
          }}
        >
          <button
            className={error ? "btn-disabled" : "btn-post"}
            disabled={error ? true : false}
            onClick={() =>
              postInfo.post.length === 0
                ? validation(setError, postInfo.post, 250, 10)
                : ""
            }
          >
            Post
          </button>
          <small
            style={{
              opacity: error ? "1" : "0",
              color: " red",
              marginLeft: "2%",
            }}
          >
            {error}
          </small>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
