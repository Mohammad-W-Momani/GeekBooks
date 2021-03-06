import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginschema } from "./Validate/Validation";
import axios from "axios";

import { input, inputPass } from "./Elements/Input";
import Register from "./SignUp";
import Transitions from "./Elements/Transitions";

import "./EntryStyle/Entry.scss";

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginschema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const [signInOrUp, setSignInOrUp] = useState(false);

  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPass, setOnFocusPass] = useState(false);

  const history = useHistory();

  const [dataErr, setDataErr] = useState({});



  const signIn = (data) => {
    axios
      .post("/login", {
        ...data,
      })
      .then(({ data }) => {
        setDataErr(data);
        if (!data.error) {
          localStorage.setItem("token", data);
          history.push("/");
          history.go(0);
        }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div className={`container ${signInOrUp ? "right-panel-active" : ""}`}>
      <Register  setSignInOrUp={setSignInOrUp} />
      <div className="container__form container--sign-in">
        <form onSubmit={handleSubmit(signIn)}>
          <h1>Sign in</h1>
          <br />
          <span>Use your account</span>
          {input(
            "text",
            "Email",
            "email",
            register,
            onFocusEmail,
            setOnFocusEmail
          )}

          <small>{errors.email?.message}</small>
          {inputPass(
            showPassword,
            setShowPassword,
            "Password",
            "password",
            register,
            onFocusPass,
            setOnFocusPass
          )}
          <small>
            {errors.password?.message}
            {dataErr.error ? "invalid password or email" : ""}
          </small>
          <br />
          <button className="btn--primary" type="submit">
            Sign In
          </button>
        </form>
      </div>

      <Transitions setSignInOrUp={setSignInOrUp} signInOrUp={signInOrUp} />
    </div>
  );
};

export default Login;
