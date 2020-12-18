import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
export default function Dialog() {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const [text, setText] = useState([]);
  const url = window.location.href.split("/");
  const location = url.length - 1;
  let username = url[location];
  username = username.replaceAll("%20", " ");
  useEffect(() => {
    axios
      .get(`/chat/${username}`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        setText([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
  }, [username]);

  return (
    <div>
      {text.map((msg, index) => {
        return (
          <div
            key={index}
            className={`my-1 d-flex flex-column  ${
              msg.sender === decoded.username
                ? "align-self-end align-items-end"
                : " align-items-start"
            }`}
          >
            <div
              className={`rounded px-2 py-1 ${
                msg.sender === decoded.username
                  ? "bg-success text-white "
                  : ".bg-light border"
              }`}
            >
              {msg.message}
            </div>
            <div
              className={`text-muted small ${
                msg.sender === decoded.username ? "text-right" : " "
              } `}
            >
              {msg.sender === decoded.username ? "You" : msg.sender}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
