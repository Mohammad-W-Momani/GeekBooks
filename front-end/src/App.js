import React, { useState } from "react";
import "./App.css";
import SearchBook from "./components/library/SearchBook";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Login />
      <Register />
      <SearchBook />
    </div>
  );
};

export default App;
