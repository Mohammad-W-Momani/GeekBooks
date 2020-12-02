import React from "react";

const BookCard = (props) => {
  return (
    <div>
      <img src={props.book.volumeInfo.imageLinks.thumbnail} />
      <h2>title :{props.book.volumeInfo.title}</h2>
      <h3>author :{props.book.volumeInfo.authors}</h3>
      <p>published :{props.book.volumeInfo.publishedDate}</p>
    </div>
  );
};

export default BookCard;
