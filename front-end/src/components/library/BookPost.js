import React from "react";
import { useLocation, useParams } from "react-router";
import UserBookShelf from "./UserBookShelf";

const BookPost = () => {
  const book = useLocation().state.bookData;
  const bookId = useParams().id;

  return (
    <div>
      <h1>{book.title}</h1>
      <img
        src={book.imageLinks.thumbnail}
        alt="No thumbnail"
        width="200"
        height="300"
      />

      <UserBookShelf bookId={bookId} />
    </div>
  );
};

export default BookPost;
