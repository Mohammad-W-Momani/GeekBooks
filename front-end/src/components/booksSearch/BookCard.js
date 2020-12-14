import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
} from "react-router-dom";
import BookPost from "../library/BookPost";

const BookCard = (props) => {
  const bookData = props.book.volumeInfo;
  if (bookData.hasOwnProperty("publishedDate") === false) {
    bookData["publishedDate"] = "0000";
  }
  if (bookData.hasOwnProperty("imageLinks") === false) {
    bookData["imageLinks"] = {
      thumbnail:
        "https://storage.googleapis.com/stateless-muslimdc-asia/raudhah-grocer/2020/08/89c7e887-no_image_available.jpg",
    };
  }

  return (
    <div>
      <Link
        to={{
          pathname: `/library/book-post/${props.book.id}`,
          state: { from: "library", bookData },
        }}
      >
        <img
          src={bookData.imageLinks.thumbnail}
          alt="No thumbnail"
          width="130"
          height="200"
        />
      </Link>
      <h2>title :{bookData.title}</h2>
      <h3>author :{bookData.authors}</h3>
      <p>published :{bookData.publishedDate}</p>
      {/* <Switch>
          <Route exact path="/BookPost" component={BookPost} />
        </Switch> */}
    </div>
  );
};

export default BookCard;
