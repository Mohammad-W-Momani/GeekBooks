import React from "react";
import jwt_decode from "jwt-decode";

const UserBookShelf = (props) => {
  console.log(props);
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  console.log(decoded);
  //   //   const id = decoded.user_id;

  return (
    <div>
      <select name="cars" id="cars">
        <option value="want-to-read">want to read</option>
        <option value="currently-reading">currently reading</option>
        <option value="read">read</option>
      </select>
    </div>
  );
};

export default UserBookShelf;
