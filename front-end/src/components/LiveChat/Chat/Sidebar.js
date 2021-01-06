import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contact from "../Contacts/Contact";
import Conversations from "../Conversation/Conversations";
import NewConversationModal from "../Conversation/NewConversationModal";
import NewContactModal from "../Contacts/NewContactModal";
export default function Sidebar({ username }) {
  const conversationKey = "conversation";
  const contactKey = "contact";
  const [activeKey, setActiveKey] = useState(conversationKey);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === conversationKey;
  const modalClose = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link className="text-success " eventKey={conversationKey}>
              Conversation
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-success " eventKey={contactKey}>
              Contacts
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={conversationKey}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={contactKey}>
            <Contact />
          </Tab.Pane>
        </Tab.Content>
        <Button
          onClick={() => setModalOpen(true)}
          className="rounded-0 bg-success"
        >
          New {conversationsOpen ? "Conversations" : "Contacts"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={modalClose}>
        {conversationsOpen ? (
          <NewConversationModal modalClose={modalClose} />
        ) : (
          <NewContactModal modalClose={modalClose} />
        )}
      </Modal>
    </div>
  );
}
