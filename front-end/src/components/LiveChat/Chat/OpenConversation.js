import React, { useState } from "react";
import { Form, InputGroup, Button, Nav } from "react-bootstrap";
import Dialog from "./Dialog";
import axios from "axios";
export default function OpenConversation(props) {
  const token = localStorage.getItem("token");
  const [msg, setMsg] = useState({
    message: "",
  });
  const url = window.location.href.split("/");
  const location = url.length - 1;
  let username = url[location];
  username = username.replaceAll("%20", " ");
  const handleSubmit = () => {
    axios
      .post(`/chat/${username}`, msg, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        setMsg([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <Nav
          className="navbar navbar-light bg-light border  "
          style={{ height: "42px" }}
        >
          <span
            className="font-weight-bold font-italic text-success"
            style={{ height: "30px" }}
          >
            {username}
          </span>
        </Nav>
        <div className=" d-flex flex-column justify-content-end px-3">
          <Dialog />
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              class="rounded-circle"
              as="textarea"
              required
              value={msg.message}
              onChange={(e) => {
                setMsg({ message: e.target.value });
              }}
              style={{
                height: "40px",
                resize: "none",
                borderRadius: "10px",
                background: "#f0f2f5",
              }}
            />
            <InputGroup.Append>
              <Button
                className="bg-success "
                type="submit"
                style={{ borderRadius: "10px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"
                  />
                </svg>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
