import React, { useState } from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
} from "react-router-dom";
import SearchBook from "./components/booksSearch/SearchBook";
import Login from "./components/Login";
import Register from "./components/Register";
import Library from "./components/library/Library";
import BookPost from "./components/library/BookPost";

const App = () => {
  return (
    <Router>
      <div>
        <Login />
        <Register />
        <SearchBook />
        <Route exact path="/library">
          <Library />
        </Route>
        <Route exact path="/library/book-post/:id">
          <BookPost />
        </Route>
        {/* <Route exact path="/Library/:id" component={BookPost} /> */}
      </div>
    </Router>
  );
};

export default App;
