import React from "react";
import { useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import BookList from "./BookList";

const SearchBook = () => {
  const [books, setbooks] = useState([]);
  const [searchBox, setsearchBox] = useState("");

  const handleSearch = (e) => {
    setsearchBox(e.target.value);
  };

  const searchBook = (e) => {
    e.preventDefault();
    const q = searchBox;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .then((data) => {
        setbooks([...data.data.items]);
      });
  };

  return (
    <div>
      <SearchInput handleSearch={handleSearch} searchBook={searchBook} />
      <br />
      <BookList books={books} />
    </div>
  );
};

export default SearchBook;
