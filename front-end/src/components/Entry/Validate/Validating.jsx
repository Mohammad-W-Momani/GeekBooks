import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginschema = yup.object().shape({
  email: yup.string().required("This field is a required"),
  password: yup.string().required("Password is a required").min(8),
});

export const signSchema = yup.object().shape({
  username: yup.string().required("Username is a required"),
  email: yup.string().email().required("Email is a required "),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .max(10)
    .required("Phone is a required"),
  password: yup.string().required("Password is a required").min(8),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});
