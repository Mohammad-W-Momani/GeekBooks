import React, { useEffect, useState } from "react";
import axios from "axios";
import Register from "./Register";
import Unavailable from "./EntryStyle/Img/Eye_Show_Unavailable.png";
import View from "./EntryStyle/Img/Eye_Show_View.png";
import "./EntryStyle/Entry.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signInOrUp, setSignInUp] = useState(false);
  const [onFocusName, setOnFocusName] = useState(false);
  const [onFocusPass, setOnFocusPass] = useState(false);

  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  const transitions = () => {
    setSignInUp(!signInOrUp);
  };

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
      <Register Unavailable={Unavailable} View={View}/>
      <div className="container__form container--sign-in">
        <form>
          <h1>Sign in</h1>
          <br />
          <span>Use your account</span>
          <div className={onFocusName ? "labelShow" : "labelHiding"}>
            <label htmlFor="Email">Email</label>
          </div>
          <input
            type="text"
            placeholder="Username, Email, Phone"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onFocus={() => {
              setOnFocusName(true);
            }}
            onBlur={() => {
              setOnFocusName(false);
            }}
            className="username-input"
          />
          <div className={onFocusPass ? "labelShow" : "labelHiding"}>
            <label htmlFor="password">Password</label>
          </div>
          <div id="input_container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => {
                setOnFocusPass(true);
              }}
              onBlur={() => {
                setOnFocusPass(false);
              }}
            />
            <img
              src={showPassword?Unavailable:View}
              id="input_img"
              onClick={(e) => {setShowPassword(!showPassword)}}
            />
          </div>

          <br />
          <button className="btn--primary" onClick={signIn}>
            Sign In
          </button>
        </form>
      </div>

      {/* Transitions component */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay--panel overlay--left">
            <h1>Already Geeks!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="btn--primary btn--ghost" onClick={transitions}>
              Sign In
            </button>
          </div>
          <div className="overlay--panel overlay--right">
            <h1>Hello, Geek!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="btn--primary btn--ghost" onClick={transitions}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
