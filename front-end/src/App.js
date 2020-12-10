import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Groups from "./component/Groups/Groups";
import Home from "./component/Home/Home";
import Profile from "./component//Profile/Profile";
import Library from "./components/library/Library";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

const App = () => {
  return (
    <Router>
       <Login />
      <Register />
      <Library />
      <Route path="/groups" exact component={Groups} />
      <Route path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
    </Router>
  );
};

export default App;
