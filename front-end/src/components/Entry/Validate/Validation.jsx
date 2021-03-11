import * as yup from "yup";

const passRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^[^\s]*$/;

export const loginschema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required")
    .email("Email must be a valid Email"),
  password: yup.string().required("Password is a required").min(8).max(25),
});

export const signSchema = yup.object().shape({
  username: yup.string().required("Username is a required").min(2),
  email: yup.string().required("Email is a required ").email("Email must be a valid Email"),
  phone: yup
    .string()
    .required("Phone is a required")
    .min(10)
    .max(13),
  password: yup
    .string()
    .required("Password is a required")
    .matches(
      passRegExp,
      "Your password must contain a number, upper & lower letter, No whitespace"
    )
    .min(8),
  confirmPassword: yup
    .string()
    .required("Confirm Password is a required")
    .oneOf([yup.ref("password"), null]),
});
