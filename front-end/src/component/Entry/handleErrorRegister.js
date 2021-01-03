export default function validation(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Passwrod should be more that 8 characters";
  }

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone Number required";
  }

  return errors;
}

