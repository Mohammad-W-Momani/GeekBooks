import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";


const App = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};
export default App;
