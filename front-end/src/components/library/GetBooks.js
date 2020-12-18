import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../booksSearch/BookList";

const GetBooks = (props) => {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(8);
  const fetchData = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.listName}&startIndex=0&maxResults=8`
      )
      .then((data) => {
        setBooks([...data.data.items]);
      });
  };

  const nextPage = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.listName}&startIndex=${startIndex}&maxResults=8`
      )
      .then((data) => {
        setBooks([...data.data.items]);
      });
    setStartIndex(startIndex + 8);
  };

  const prevPage = () => {
    setStartIndex(startIndex - 8);
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.listName}&startIndex=${startIndex}&maxResults=8`
      )
      .then((data) => {
        setBooks([...data.data.items]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>{props.listName}</h1>
      <BookList books={books} />
      <button onClick={nextPage}>next</button>
      {startIndex > 8 && <button onClick={prevPage}>back</button>}
    </div>
  );
};

export default GetBooks;
