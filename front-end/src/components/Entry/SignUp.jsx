import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signSchema } from "./Validate/Validation";
import axios from "axios";
import { input, inputPass } from "./Elements/Input";

const Register = ({ setSignInOrUp }) => {
  const { register, handleSubmit, errors, reset } = useForm({
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
  const [alert, setalert] = useState(false);

  const signUp = (data) => {
    axios
      .post("/register", {
        ...data,
      })
      .then(({ data }) => {
        setDataErr(data);
        {
          data === "User Has Been Created Successfully" && reset();
        }
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
  };

  const interval = setInterval(() => {
    if (dataErr === "User Has Been Created Successfully") {
      setalert(false);
      setSignInOrUp(false);
      clearInterval(interval);
    }
  }, 5000);
  return (
    <div className="container__form container--sign-up">
      {dataErr === "User Has Been Created Successfully" && (
        <div className="created-success" hidden={alert ? true : false}>
          Created Successfully
        </div>
      )}

      <form onSubmit={handleSubmit(signUp)}>
        <h1>Create Account</h1>
        <br />

        {input(
          "text",
          "Username",
          "username",
          register,
          onFocusName,
          setOnFocusName,
          errors.username
        )}

        <small>
          {errors.username?.message}
          {dataErr === "username is already used"
            ? "Username is already used"
            : ""}
        </small>
        {input(
          "text",
          "Email",
          "email",
          register,
          onFocusEmail,
          setOnFocusEmail,
          errors.email
        )}

        <small>
          {errors.email?.message}
          {dataErr === "email is already used" ? "Email is already used" : ""}
        </small>
        {input(
          "tel",
          "Phone",
          "phone",
          register,
          onFocusPhone,
          setOnFocusPhone,
          errors.phone
        )}
        <small>
          {errors.phone?.message}
          {dataErr === "phone number is already used"
            ? "Phone is already used"
            : ""}
        </small>

        {inputPass(
          showPassword,
          setShowPassword,
          "Password",
          "password",
          register,
          onFocusPass,
          setOnFocusPass,
          errors.password
        )}

        <small>
          {errors.password?.message}
          {dataErr ===
          "Your password must contain a number, upper & lower letter, NO whitespace, No symbol "
            ? dataErr
            : ""}
        </small>
        {inputPass(
          showConfPassword,
          setShowConfPassword,
          "Confirm Password",
          "confirmPassword",
          register,
          onFocusConfPass,
          setOnFocusConfPass,
          errors.confirmPassword
        )}
        <small>{errors.confirmPassword && "Password does not Match!"}</small>

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
