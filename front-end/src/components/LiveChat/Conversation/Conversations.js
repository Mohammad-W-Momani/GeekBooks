import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { ListGroup, Nav } from "react-bootstrap";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default function Conversations() {
  const [conversations, setConversations] = useState([]);
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/chat`, {
        headers: { Authorization: `Basic ${token}` },
      })
      .then((response) => {
        setConversations([...response.data]);
        if (conversations.indexOf(response.data[0])) {
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <Route>
      <ListGroup variant="flush">
        {conversations.map((conversation) => (
          <ListGroup.Item key={conversation.receiver}>
            <Nav.Link
              variant="outline-info"
              className="text-dark "
              onClick={() => {
                history.push(`/chat/${conversation.receiver}`);
                history.go(0);
              }}
            >
              {conversation.receiver}
            </Nav.Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Route>
  );
}
