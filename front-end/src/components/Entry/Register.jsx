import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  yupResolver } from "@hookform/resolvers/yup";
import {signSchema} from './Validate/Validating'

import axios from "axios";



const Register = ({ Unavailable, View }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const [onFocusName, setOnFocusName] = useState(false);
  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPhone, setOnFocusPhone] = useState(false);
  const [onFocusPass, setOnFocusPass] = useState(false);
  const [onFocusConfPass, setOnFocusConfPass] = useState(false);

  const [dataErr, setDataErr] = useState();
  const { border } = {
    border: "1px solid red",
  };
  const signUp = (data) => {
    axios
      .post("/register", {
        ...data,
      })
      .then(({ res }) => {
        setDataErr(res);
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div className="container__form container--sign-up">
      <form onSubmit={handleSubmit(signUp)}>
        <h1>Create Account</h1>
        <br />
        <div className={onFocusName ? "labelShow" : "labelHiding"}>
          <label htmlFor="username">Username</label>
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={register}
          style={{ border: errors.username ? border : "" }}
          onFocus={() => {
            setOnFocusName(true);
          }}
          onBlur={() => {
            setOnFocusName(false);
          }}
        />

        <small>
          {errors.username?.message}
          {dataErr === "username is already used"
            ? "Username is already used"
            : ""}
        </small>
        <div className={onFocusEmail ? "labelShow" : "labelHiding"}>
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register}
          style={{ border: errors.email ? border : "" }}
          onFocus={() => {
            setOnFocusEmail(true);
          }}
          onBlur={() => {
            setOnFocusEmail(false);
          }}
        />
        <small>
          {errors.email?.message}
          {dataErr === "email is already used" ? "Email is already used" : ""}
        </small>
        <div className={onFocusPhone ? "labelShow" : "labelHiding"}>
          <label htmlFor="phone">Phone</label>
        </div>
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          ref={register}
          style={{ border: errors.phone ? border : "" }}
          onFocus={() => {
            setOnFocusPhone(true);
          }}
          onBlur={() => {
            setOnFocusPhone(false);
          }}
        />
        <small>
          {errors.phone?.message}
          {dataErr === "phone number is already used"
            ? "Phone is already used"
            : ""}
        </small>
        <div className={onFocusPass ? "labelShow" : "labelHiding"}>
          <label htmlFor="password">Password</label>
        </div>
        <div id="input_container">
          <input
            type={showPassword ? "text" : "password"}
            id="input"
            placeholder="Password"
            name="password"
            ref={register}
            style={{ border: errors.password ? border : "" }}
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
        <small>
          {errors.password?.message}
          {dataErr ===
          "Your password must contain a number, upper & lower letter, NO whitespace, No symbol "
            ? "Your password must contain a number, upper & lower letter, NO whitespace, No symbol"
            : ""}
        </small>

        <div className={onFocusConfPass ? "labelShow" : "labelHiding"}>
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div id="input_container">
          <input
            type={showConfPassword ? "text" : "password"}
            id="input"
            placeholder="Confirm Password"
            name="confirmPassword"
            ref={register}
            style={{ border: errors.confirmPassword ? border : "" }}
            onFocus={() => {
              setOnFocusConfPass(true);
            }}
            onBlur={() => {
              setOnFocusConfPass(false);
            }}
          />
          <img
            src={showConfPassword ? Unavailable : View}
            id="input_img"
            onClick={() => {
              setShowConfPassword(!showConfPassword);
            }}
          />
        </div>
        <small>{errors.confirmPassword && "Password Should Match!"}</small>

        <button
          className="btn--primary"
          type="submit"
          style={{ marginTop: "1rem" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;