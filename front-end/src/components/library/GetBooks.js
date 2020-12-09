import React, { useEffect, useState } from "react";
import axios from "./instance";
import BookList from "../booksSearch/BookList";

const GetBooks = ({ category, fetchURL }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setBooks(response.data.items);
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
