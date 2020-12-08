import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CreatePost from "./CreatePost/CreatePost";
import "./Posts.css";

const Posts = () => {
  return (
    <div class="container bootstrap snippets bootdey " >
      <div class="row d-flex align-items-center justify-content-center">
        <CreatePost />
        <div
          class="row d-flex align-items-center justify-content-center "
          style={{ borderRadius: "20px", width: "90%" }}
        >
          <div class="col-md-offset-3 col-md-12 col-xs-12">
            <div class="card" style={{ borderRadius: "20px" }}>
              <div class="d-flex justify-content-between p-2 px-3">
                <div class="d-flex flex-row align-items-center">
                  {" "}
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU"
                    width="50"
                    class="rounded-circle"
                  />
                  <div class="d-flex flex-column ml-2">
                    {" "}
                    <span class="font-weight-bold">Momani</span>{" "}
                  </div>
                </div>
                <div class="d-flex flex-row mt-1 ellipsis">
                  {" "}
                  <small class="mr-2">20 mins</small>{" "}
                  <i class="fa fa-ellipsis-h"></i>{" "}
                </div>
              </div>{" "}
              <img src="" class="img-fluid" />
              <div class="p-2">
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <hr />
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    {" "}
                    <ThumbUpIcon />
                    Like
                  </div>{" "}
                  <span>2 comments</span>{" "}
                </div>
                <hr />
                <div class="comments">
                  <div class="d-flex flex-row mb-2">
                    {" "}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU"
                      width="40"
                      class="rounded-image"
                    />
                    <div class="d-flex flex-column ml-2">
                      {" "}
                      <span class="name">Abd</span>{" "}
                      <small class="comment-text">
                        I like this alot! thanks alot
                      </small>
                      <div class="d-flex flex-row align-items-center status">
                        {" "}
                        <small>Like</small> <small>18 mins</small>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row mb-2">
                    {" "}
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU"
                      width="40"
                      class="rounded-image"
                    />
                    <div class="d-flex flex-column ml-2">
                      {" "}
                      <span class="name">ayham</span>{" "}
                      <small class="comment-text">Thanks for sharing!</small>
                      <div class="d-flex flex-row align-items-center status">
                        {" "}
                        <small>Like</small> <small>8 mins</small>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="comment-input">
                    {" "}
                    <input type="text" class="form-control" />
                    <div class="fonts">
                      {" "}
                      <i class="fa fa-camera"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
