import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Setting from "./components/Setting/Setting";
import Login from "./components/Entry/Login";
import Library from "./components/library/Library";
import BookPost from "./components/library/BookPost";

const App = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/setting" exact component={Setting} />
        <Route path={`/:username`} exact component={Profile} />
        <Route path="/library" exact component={Library} />

        <Route path={`/library/book-post/:id`} exact component={BookPost} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Route path="/" exact component={Login} />
    </Router>
  );
};

export default App;
