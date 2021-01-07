import React, { useState } from "react";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
export default function NewContactModal({ modalClose }) {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState({
    username: "",
  });
  console.log(username);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      `/${username.username}/follows`,
      {},
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );

    modalClose();
  };
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
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
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
