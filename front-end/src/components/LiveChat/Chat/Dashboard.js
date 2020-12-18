import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";

export default function Dashboard({ username }) {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar username={username} />

      <OpenConversation />
    </div>
  );
}
