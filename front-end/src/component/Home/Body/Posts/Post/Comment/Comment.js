import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./Comment.css";

const Comment = () => {
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
          <div className="d-flex flex-column ml-2">
            {" "}
            <span className="name">Abd</span>{" "}
            <small className="comment-text pr-2 pt-2 pb-2">
              I like this alot! thanks alot
            </small>
            <div className="d-flex flex-row align-items-center status">
              {" "}
              <small>
                <FavoriteIcon className="text-danger" />
              </small>{" "}
              <small className="pl-3">18 mins</small>{" "}
            </div>
          </div>
        </div>
        <div className="comment-input d-flex">
          {" "}
          <input type="text" className="form-control" />
          <div className="fonts">
            <AddBoxIcon
              className="text-success"
              style={{ width: "40px", height: "40px" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Comment;
