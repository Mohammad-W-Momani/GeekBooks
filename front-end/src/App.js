import React, { useState } from "react";
import "./App.css";
import Library from "./components/library/Library";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <Login />
      <Register />
      <Library />
    </div>
  );
};

export default App;
