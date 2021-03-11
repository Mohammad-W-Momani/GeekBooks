import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import "./Posts.css";
const Posts = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const username = decoded.username;
  const [postsArray, setPostsArray] = useState([]);

  // A state hook for rendering the posts on the home page (It will be passed to other components and will set this state inside those components so that the page renders on action)
  const [getPosts, setGetPosts] = useState(false);

  const getUserPosts = () => {
    axios
      .get(`/${username}/post`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        if (response.data === "Add new posts ") {
          console.log("Add Posts");
          return;
        }
        setPostsArray([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getUserPosts();
  }, [getPosts]);

  const postsStyle = {
    backgroundColor: "none",
    boxShadow: "none",
    borderRadius: 0,
    marginRight:"5%"
  };
  return (
    <div style={postsStyle}>
      <div>
        <CreatePost getPosts={getPosts} setGetPosts={setGetPosts} />
        <div>
          {postsArray
            .map((elem, i) => {
              return (
                <Post
                  postElement={elem}
                  key={i + 1}
                  getUserPosts={getUserPosts}
                  getPosts={getPosts}
                  setGetPosts={setGetPosts}
                />
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Posts;
