import React, { useEffect, useState } from "react";
import axios from "./instance";
import BookList from "../booksSearch/BookList";

const GetBooks = ({ category, fetchURL }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);

      const checkedData = response.data.items.map((book) => {
        if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
          book.volumeInfo["publishedDate"] = "0000";
        } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
          book.volumeInfo["imageLinks"] = {
            thumbnail:
              "https://storage.googleapis.com/stateless-muslimdc-asia/raudhah-grocer/2020/08/89c7e887-no_image_available.jpg",
          };
        }
        return book;
      });

      setBooks([...checkedData]);
    }
    fetchData();
  }, [fetchURL]);
  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default GetBooks;
