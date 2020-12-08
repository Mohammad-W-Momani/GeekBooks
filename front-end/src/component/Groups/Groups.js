import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Groups.css";

function Groups() {
  const [allGroups, setAllGroups] = useState([]);
  useEffect(() => {
    getAllTasks();
  });
  const getAllTasks = () => {
    Axios.get("http://localhost:5000/groups")
      .then((response) => {
        setAllGroups(response.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <div className="all">
      {allGroups.map((group) => (
        <div className="allGroups">
          <h1 className="group_name">{group.group_name}</h1>
          <h3 className="description">{group.description}</h3>
          <h4 className="members">{group.members > 0? group.members: "0"}</h4>
        </div>
      ))}
    </div>
  );
}

export default Groups;
