import React, { useState } from "react";
import axios from "axios";
import validate from "./handleErrorRegister";

const Register = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    if (Object.keys(errors).length) {
      console.log("need more data");
    } else {
      axios
        .post("http://localhost:5000/register", values)
        .then((result) => {})
        .catch((err) => {
          console.log("ERR : ", err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Register User</h1>
      <section>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          value={values.username}
          onChange={handleChange}
        ></input>
        {errors.username && <p className="input-error"> {errors.username} </p>}
      </section>

      <section>
        <label>Email </label>
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <p className="input-error"> {errors.email} </p>}
      </section>

      <section>
        <label>Password </label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={values.password}
          onChange={handleChange}
        ></input>
        {errors.password && <p className="input-error"> {errors.password} </p>}
      </section>

      <section>
        <label>Confirm Password </label>
        <input
          type="password"
          name="password2"
          placeholder="confirm password"
          value={values.password2}
          onChange={handleChange}
        ></input>
        {errors.password2 && (
          <p className="input-error"> {errors.password2} </p>
        )}
      </section>

      <section>
        <label>Phone Number </label>
        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        ></input>
        {errors.phone && <p className="input-error"> {errors.phone} </p>}
      </section>

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
};

export default Register;
