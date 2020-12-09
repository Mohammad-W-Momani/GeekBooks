import React from "react";
import "./CreatePost.css";
const CreatePost = () => {
  return (
    <div
      className="col-md-offset-3 col-md-12 col-xs-12 pr-1"
      style={{ borderRadius: "15px", paddingLeft: "45px" }}
    >
      <div
        className="well well-sm well-social-post col-md-11 p-0"
        style={{ borderRadius: "15px" }}
      >
        <form>
          <textarea
            className="form-control shadow-none"
            style={{ borderRadius: "15px" }}
            placeholder="What's in your mind?"
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
