import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Comment from "./Comment/Comment"

const Post = () => {
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
              <span className="font-weight-bold">Momani</span>{" "}
            </div>
          </div>
          <div className="d-flex flex-row mt-1 ellipsis">
            {" "}
            <small className="mr-2">20 mins</small>{" "}
          </div>
        </div>{" "}
        <div className="p-2">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex ">
              {" "}
              <div className="pl-2">
                <FavoriteIcon className="text-danger " />
              </div>
            </div>{" "}
            <span className="pr-2">2 comments</span>{" "}
          </div>
          <hr />
          <Comment/> 
          <Comment/>
        </div>
      </div>
    </div>
  );
};

export default Post;

