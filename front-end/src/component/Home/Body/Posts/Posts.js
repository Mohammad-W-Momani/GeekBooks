import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="container bootstrap snippets bootdey ">
      <div className="row d-flex align-items-center justify-content-center">
        <CreatePost />
        <div
          className="row d-flex align-items-center justify-content-center "
          style={{ borderRadius: "20px", width: "90%" }}
        >
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Posts;
