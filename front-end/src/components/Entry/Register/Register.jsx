import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  return (
    <div className="container__form container--sign-up">
      <form>
        <h1>Create Account</h1>
        <br />
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="phone" placeholder="Phone" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn--entry">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
