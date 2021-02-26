import React, { useState, useRef} from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [password, setPassword] = useState({});
  const [confirmPassword, setConfirmPassword] = useState({});
  


  const signUp = () => {
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
        <div>
        <label  htmlFor="username">Username</label>
        </div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            autoFocus
          />
        <div>
        <label htmlFor="email">Email</label>
        </div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        <div>
        <label htmlFor="phone">Phone</label>
        </div>
          <input
            type="tel"
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
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
        <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        <button className="btn--entry" onClick={signUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
