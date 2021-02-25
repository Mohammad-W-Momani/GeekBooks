import React, { useState } from "react";
import axios from "axios";
import Register from "../Register/Register";
import "./Login.scss";

const Login = () => {
  const [signInUp, setSignInUp] = useState(false);
  // {
  //   axios
  //   .post("http://localhost:5000/login", values)
  //   .then((result) => {
  //     if (!result.data.error) {
  //       localStorage.setItem("token", result.data);
  //       window.location.href = "/";
  //     }
  //   })
  //   .catch((err) => {
  //     console.log("ERR : ", err);
  //   });
  // }

  const transitions = () => {
    setSignInUp(!signInUp);
  };

  return (
    <>
      <div className={`container ${signInUp ? "right-panel-active" : ""}`}>
        <Register />
        <div className="container__form container--sign-in">
          <form>
            <h1>Sign in</h1>
            <br/>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <br />
            <button className="btn--entry ">Sign In</button>
          </form>
        </div>
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
    </>
  );
};

export default Login;
