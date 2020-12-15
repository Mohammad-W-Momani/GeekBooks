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
  const token = localStorage.getItem("token");
  return token ? (
    <Router>
      <Route path="/library" exact component={Library} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/groups" exact component={Groups} />
      <Route path="/" exact component={Home} />
      <Route path={`/:username`} exact component={Profile} />
    </Router>
  ) : (
    <Router>
      
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
};

export default App;
