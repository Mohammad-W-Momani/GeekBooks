import React, { useState } from "react";
import axios from "axios";
const Register = ({ Unavailable, View }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const [onFocusName, setOnFocusName] = useState(false);
  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPhone, setOnFocusPhone] = useState(false);
  const [onFocusPass, setOnFocusPass] = useState(false);
  const [onFocusConfPass, setOnFocusConfPass] = useState(false);

  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [password, setPassword] = useState({});
  const [confirmPassword, setConfirmPassword] = useState({});

  const signUp = (e) => {
    e.preventDefault();
    axios
      .post("/register", {
        username,
        email,
        password,
        phone,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  return (
    <div className="container__form container--sign-up">
      <form>
        <h1>Create Account</h1>
        <br />
        <div className={onFocusName ? "labelShow" : "labelHiding"}>
          <label htmlFor="username">Username</label>
        </div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onFocus={() => {
            setOnFocusName(true);
          }}
          onBlur={() => {
            setOnFocusName(false);
          }}
        />
        <div className={onFocusEmail ? "labelShow" : "labelHiding"}>
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={() => {
            setOnFocusEmail(true);
          }}
          onBlur={() => {
            setOnFocusEmail(false);
          }}
        />
        <div className={onFocusPhone ? "labelShow" : "labelHiding"}>
          <label htmlFor="phone">Phone</label>
        </div>
        <input
          type="tel"
          placeholder="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          onFocus={() => {
            setOnFocusPhone(true);
          }}
          onBlur={() => {
            setOnFocusPhone(false);
          }}
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
            src={showPassword ? Unavailable : View}
            id="input_img"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        </div>

        <div className={onFocusConfPass ? "labelShow" : "labelHiding"}>
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <div id="input_container">
          <input
            type={showConfPassword ? "text" : "password"}
            placeholder="Confirm Password"
            id="input"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
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

        <button
          className="btn--primary"
          onClick={signUp}
          style={{ marginTop: "1rem" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
