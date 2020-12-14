import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../booksSearch/BookList";

const GetBooks = (props) => {
  const [books, setBooks] = useState([]);

  const fetchData = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${props.listName}`)
      .then((data) => {
        setBooks([...data.data.items]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default GetBooks;
