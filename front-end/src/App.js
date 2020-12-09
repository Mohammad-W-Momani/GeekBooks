import React, { useState } from "react";
import "./App.css";
import SearchBook from "./components/booksSearch/SearchBook";
import Login from "./components/Login";
import Register from "./components/Register";
import Library from "./components/library/Library";

const App = () => {
  return (
    <div>
      <Login />
      <Register />
      <SearchBook />
      <Library />
    </div>
  );
};

export default App;
