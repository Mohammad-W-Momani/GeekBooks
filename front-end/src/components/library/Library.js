import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

const Library = () => {
  const [books, setbooks] = useState([]);
  const [searchBox, setsearchBox] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setsearchBox(e.target.value);
  };

  const searchBook = (e) => {
    e.preventDefault();
    const q = searchBox;
    console.log(q);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <p>hello from library</p>
      <SearchInput handleSearch={handleSearch} searchBook={searchBook} />
    </div>
  );
};

export default Library;
