import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Dropdown } from "react-bootstrap";
import Comment from "./Comment/Comment";
import PostLike from "./PostLike";
import UpdatePost from "./UpdatePost";
import CreateComment from "./Comment/CreateComment";
import "./Post.css";

const Post = (props) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  // postAttr is the props that is set from the Posts component and contains every post as an element
  const { getUserPosts, getPosts, setGetPosts } = props;
  const postAttr = props.postElement;

  // State hook for editing the post
  const [editPostMode, setEditPostMode] = useState(false);

  // state hook which is an array that have comments of the post
  const [commentsArray, setCommentsArray] = useState([]);

  // State hook for rendering the comments onClick if the state is true (toggle)
  const [renderComments, setRenderComments] = useState(false);

  //State hook for displaying the editAndDelete dropdown menu
  const [editDropDown, setEditDropDown] = useState(false);

  // Getting the comments on the post by the post_id and set the state hook to the array of comments
  const getPostComments = () => {
    axios
      .get(`http://localhost:5000/post/comment/${postAttr.post_id}`, {
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
      .delete(`http://localhost:5000/post/${postAttr.post_id}`, {
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
            {" "}
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
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
              ></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#"
                  onClick={() => {
                    if (!editPostMode) {
                      setEditPostMode(true);
                      return;
                    }
                    setEditPostMode(false);
                  }}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={deletePost}>
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
            <p className="text-justify">{postAttr.post}</p>
          )}
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            {/* The Like component */}
            <PostLike postAttr={postAttr} />
            {/* The comments component */}
            <span
              className="pr-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                renderComments
                  ? setRenderComments(false)
                  : setRenderComments(true);
              }}
            >
              {renderPostComments.length} comments
            </span>{" "}
          </div>
          <hr />
          {/* Rendering the comments of the post */}
          {renderComments ? renderPostComments : ""}
          <CreateComment post_id={postAttr.post_id} />
        </div>
      </div>
    </div>
  );
};
export default Post;
