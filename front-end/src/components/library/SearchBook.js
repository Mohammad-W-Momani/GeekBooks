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
        const checkedData = data.data.items.map((book) => {
          if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
            book.volumeInfo["publishedDate"] = "0000";
          } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
            book.volumeInfo["imageLinks"] = {
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
            };
          }
          return book;
        });
        setbooks([...checkedData]);
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
