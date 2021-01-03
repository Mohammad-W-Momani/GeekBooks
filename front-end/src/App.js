import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Profile from "./component/Profile/Profile";
import Setting from "./component/Setting/Setting";
import Library from "./component/library/Library";
import Login from "./component/Entry/Login/Login";
import Register from "./component/Entry/Register/Register";

const App = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/library" exact component={Library} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/setting" exact component={Setting} />
        <Route path={`/:username`} exact component={Profile} />
      </Switch>
    </Router>
  ) : (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
};

export default App;
