import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
export default function NewContactModal({ modalClose }) {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState({
    username: "",
  });
  console.log(username);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/profile/${username.username}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((response) => {
        setUsername([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
    console.log(username);
    modalClose();
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setUsername({ ...setUsername, username: e.target.value });
              }}
              value={setUsername.username}
              required
            />
          </Form.Group>
          <Button
            className="bg-success"
            type="submit"
            onClick={() => {
              history.push(`/chat/${username.username}`);
              history.go(0);
            }}
          >
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
