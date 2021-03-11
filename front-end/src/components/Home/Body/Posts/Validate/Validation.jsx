export const validation = (setError, values, max = 250, min = 10) => {
  values = values.trim();
  if (values.length === 0) {
    setError({ error: "Require" });
  } else if (values.length < min) {
    setError({ error: `Minimum length is ${min}` });
  } else if (values.length > max) {
    setError({ error: `Maximum length is ${max}` });
  } else {
    setError("");
  }
};
