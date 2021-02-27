import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginschema } from "./Validate/Validating";
import axios from "axios";

import Register from "./Register";
import Unavailable from "./EntryStyle/Img/Eye_Show_Unavailable.png";
import View from "./EntryStyle/Img/Eye_Show_View.png";
import "./EntryStyle/Entry.scss";

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginschema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const [signInOrUp, setSignInUp] = useState(false);

  const [onFocusName, setOnFocusName] = useState(false);
  const [onFocusPass, setOnFocusPass] = useState(false);

  const [dataErr, setDataErr] = useState();

  const transitions = () => {
    setSignInUp(!signInOrUp);
  };

  const signIn = (data) => {
    axios
      .post("/login", {
        ...data,
      })
      .then(({ res }) => {
        setDataErr(res);
        // if (!result.data.error) {
        //   localStorage.setItem("token", result.data);
        //   window.location.href = "/";
        // }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div className={`container ${signInOrUp ? "right-panel-active" : ""}`}>
      <Register Unavailable={Unavailable} View={View} />
      <div className="container__form container--sign-in">
        <form onSubmit={handleSubmit(signIn)}>
          <h1>Sign in</h1>
          <br />
          <span>Use your account</span>
          <div className={onFocusName ? "labelShow" : "labelHiding"}>
            <label htmlFor="Email">Email</label>
          </div>
          <input
            type="text"
            placeholder="Username, Email, Phone"
            name={"email" || "username" || "phone"}
            ref={register}
            onFocus={() => {
              setOnFocusName(true);
            }}
            onBlur={() => {
              setOnFocusName(false);
            }}
            className="username-input"
          />
          {console.log(dataErr)}
          <small>{errors.email?.message}</small>
          <div className={onFocusPass ? "labelShow" : "labelHiding"}>
            <label htmlFor="password">Password</label>
          </div>
          <div id="input_container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="input"
              name="password"
              ref={register}
              onFocus={() => {
                setOnFocusPass(true);
              }}
              onBlur={() => {
                setOnFocusPass(false);
              }}
            />
            <img
              src={showPassword ? Unavailable : View}
              id="input_img"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </div>
          <small>{errors.password?.message}</small>
          <br />
          <button className="btn--primary" type="submit">
            Sign In
          </button>
        </form>
      </div>

      {/* Transitions component */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay--panel overlay--left">
            <h1>Already Geeks?</h1>
            <p>Enter your personal details and start journey with us</p>

            <button className="btn--primary btn--ghost" onClick={transitions}>
              Sign In
            </button>
          </div>
          <div className="overlay--panel overlay--right">
            <h1>Hello, Geek</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
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
