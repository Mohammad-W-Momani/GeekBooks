import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  console.log(props);
  const booksArr = props.books.map((book, key) => {
    return <BookCard key={key} book={book} />;
  });

  return <div>{booksArr}</div>;
};

export default BookList;
