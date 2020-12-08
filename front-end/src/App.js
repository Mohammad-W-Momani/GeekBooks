import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Groups from "./component/Groups/Groups";
import Home from "./component/Home/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/groups" exact component={Groups} />
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;
