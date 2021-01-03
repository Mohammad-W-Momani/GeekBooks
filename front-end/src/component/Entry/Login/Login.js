import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

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
            window.location.href = "/";
          }
        })
        .catch((err) => {
          console.log("ERR : ", err);
        });
    }
  };

  return (
    <div className="containers">
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "130px" }}
      >
        <div
          className="card d-flex "
          style={{
            height: "370px",
            marginTop: "auto",
            marginBottom: "125px",
            width: "400px",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="card-header">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Username, Email, Phone"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                {errors.validation && <p> {errors.validation} </p>}
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-dark float-right login_btn text-light"
                  style={{ background: "rgba(44, 255, 62, 0.315)" }}
                  
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              New Geek?
              <a href="register" className="text-success">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

