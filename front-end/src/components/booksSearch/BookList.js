import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  const booksArr = props.books.map((book, key) => {
    return <BookCard key={key} book={book} />;
  });

  return <div className="book-array">{booksArr}</div>;
};

export default BookList;
