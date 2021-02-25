import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [password, setPassword] = useState({});
  const [confirmPassword, setConfirmPassword] = useState({});

  const signUp = ()=>{
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
  }


  return (
    <div className="container__form container--sign-up">
      <form >
        <h1>Create Account</h1>
        <br />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="phone"
          placeholder="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button className="btn--entry" onClick={signUp}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
