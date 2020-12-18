import React, { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import axios from "axios";

const UserBookShelf = (props) => {
  const [bookShelf, setBookShelf] = useState("");

  const token = localStorage.getItem("token");
  // const decoded = jwt_decode(token);

  useEffect(() => {
    axios
      .get(`/bookList/${props.bookId}`, {
        headers: { authorization: `Basic ${token}` },
      })
      .then((res) => {
        if (res.data.hasOwnProperty("WTR") === true) {
          setBookShelf("WTR");
        } else if (res.data.hasOwnProperty("CR") === true) {
          setBookShelf("CR");
        } else if (res.data.hasOwnProperty("R") === true) {
          setBookShelf("R");
        }
      });
  }, []);

  const handelChange = (e) => {
    console.log(e.target.value);
    setBookShelf(e.target.value);
    axios.post(`/booklist/${props.bookId}`, bookShelf).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <select name="cars" id="cars" onChange={handelChange}>
        <option value="WTR">want to read</option>
        <option value="CR">currently reading</option>
        <option value="R">read</option>
      </select>
    </div>
  );
};

export default UserBookShelf;
