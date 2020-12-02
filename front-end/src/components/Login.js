import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const validate = (values) => {
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid Email Address";
    }

    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Incorrect Password";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log("errors:", errors);
    if (Object.keys(errors).length) {
      setErrors({ ...errors, validation: "Invalid Email or Password" });
    } else {
      axios
        .post("http://localhost:5000/login", values)
        .then((result) => {
          if (!result.data.error) {
            localStorage.setItem("token", result.data);
          }
        })
        .catch((err) => {
          console.log("ERR : ", err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <section>
        <label>Email </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={values.email}
          onChange={handleChange}
        ></input>
      </section>
      <br />
      <section>
        <label>Password </label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={values.password}
          onChange={handleChange}
        ></input>
      </section>
      <br />
      {errors.validation && <p> {errors.validation} </p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
