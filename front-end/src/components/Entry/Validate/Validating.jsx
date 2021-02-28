import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^[a-zA-Z0-9]*$/;

export const loginschema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required("Email is a required"),
  password: yup.string().required("Password is a required").min(8),
});

export const signSchema = yup.object().shape({
  username: yup.string().required("Username is a required"),
  email: yup.string().email().required("Email is a required "),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .max(13)
    .required("Phone is a required"),
  password: yup.string().required("Password is a required").matches(passRegExp, "Your password must contain a number, upper & lower letter, NO whitespace, No symbol ").min(8),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});
