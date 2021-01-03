import React, { useState } from "react";
import axios from "axios";
import validate from "../handleErrorRegister";
import "./Register.css";
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
    <div>
      <main className="my-form">
        <div className="cotainer ">
          <div
            className="row justify-content-center pt-5 ml-5"
            style={{ paddingLeft: "220px", marginRight: "15px" }}
          >
            <div className="col-md-8">
              <div
                className="card "
                style={{
                  marginTop: "auto",
                  marginBottom: "125px",
                  width: "60%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="card-header"
                  style={{ color: "white", fontSize: "30px" }}
                >
                  Register
                </div>
                <div className="card-body">
                  <form name="my-form" onSubmit={handleSubmit}>
                    <section></section>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors.username && (
                        <p className="input-error"> {errors.username} </p>
                      )}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        className="form-control"
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="input-error"> {errors.email} </p>
                      )}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-phone"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors.phone && (
                        <p className="input-error"> {errors.phone} </p>
                      )}
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
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="input-error"> {errors.password} </p>
                      )}
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password2"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={values.password2}
                        onChange={handleChange}
                      />
                      {errors.password2 && (
                        <p className="input-error"> {errors.password2} </p>
                      )}
                    </div>
                    <div className="col-md-6 offset-md-4 ">
                      <button
                        type="submit"
                        className="btn btn_register"
                        style={{ background: "rgba(44, 255, 62, 0.315)" }}
                      >
                        Register
                      </button>
                    </div>
                    <div>
                      <div
                        className="d-flex justify-content-center pt-2 "
                        style={{ color: "white" }}
                      >
                        Already Geek?
                        <a href="login" className="text-success">
                          Login
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;

