import { useState } from "react";
import JWT from "jwt-decode";
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const token = localStorage.getItem(key);
    if (token !== null) {
      const decoded = JWT(token);
      const { username } = decoded;
      return username;
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  return [value, setValue];
}
