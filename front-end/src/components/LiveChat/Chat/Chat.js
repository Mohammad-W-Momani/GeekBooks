import React from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import Login from "../../Login/Login";
import Dashboard from "./Dashboard";
export default function Chat() {
  const [username, setUsername] = useLocalStorage("token");
  const dashboard = (

      <Dashboard username={username} />

  );
  return username ? dashboard : <Login onIdSubmit={setUsername} />;
}
