import React, { useEffect, useState } from "react";
import axios from "axios";
import Register from "./Register";
import "./EntryStyle/Entry.scss";

const Login = () => {
  const [signInOrUp, setSignInUp] = useState(false);
  const [onFocus, setOnFocus] = useState(true);
  const transitions = () => {
    setSignInUp(!signInOrUp);
  };

  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  const signIn = (e) => {
    e.preventDefault();
    console.log("1");
    axios
      .post("/login", {
        username,
        password,
      })
      .then((result) => {
        console.log(result);
        if (!result.data.error) {
          localStorage.setItem("token", result.data);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  useEffect(() => {}, []);
  return (
    <div className={`container ${signInOrUp ? "right-panel-active" : ""}`}>
      <Register />
      <div className="container__form container--sign-in">
        <form>
          <h1>Sign in</h1>
          <br />
          <span>Use your account</span>
          <div className={onFocus ? "username-label" : "username-label1"}>
            {console.log(onFocus)}
            <label htmlFor="Email">Email</label>
          </div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onFocus={() => {
              setOnFocus(false);
            }}
            className="username-input"
            // style={onFocus? }
          />
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className="btn--entry" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>

      {/* Transitions component */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay--panel overlay--left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="btn--entry btn--ghost" onClick={transitions}>
              Sign In
            </button>
          </div>
          <div className="overlay--panel overlay--right">
            <h1>Hello, Geek!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="btn--entry btn--ghost" onClick={transitions}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
