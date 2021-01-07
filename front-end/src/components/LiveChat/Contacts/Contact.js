import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ListGroup, Nav } from "react-bootstrap";
export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    axios
      .get(`/${decoded.username}/followers`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        setContacts([...response.data]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <Route>
      <ListGroup variant="flush">
        {contacts.map((contact) => (
          <ListGroup.Item key={contact.follower_username}>
            <Nav.Link
              variant="outline-info"
              className="text-dark "
              onClick={() => {
                history.push(`/chat/${contact.follower_username}`);
                history.go(0);
              }}
            >
              {contact.follower_username}
            </Nav.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Route>
  );
}
