import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("aaa", values);
    e.preventDefault();
    // setErrors(validate(values));
    axios
      // Bath from BE
      .post("http://localhost:5000/login", values)
      .then((result) => {
        console.log(result);
        if (!result.data.error) {
          localStorage.setItem("token", result.data);
        }
        // else {
        //   //   setErrors({ ...errors, validation: "Invalid Email or Password" });
        // }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
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
        {/* {errors.email && <p className="input-error"> {errors.email} </p>} */}
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
        {/* {errors.password && <p className="input-error"> {errors.password} </p>} */}
      </section>
      <br />
      {/* {errors.validation && <p className="input-error">{errors.validation}</p>} */}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
