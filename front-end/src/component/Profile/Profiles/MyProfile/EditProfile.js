import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
function EditProfile() {
  const token = localStorage.getItem("token");

  const [show, setShow] = useState(false);
  const [editInf, setEditInf] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editEmail = () => {
    Axios.put(
      `/profile/editemail`,
      {newEmail:editInf ,oldEmail:oldEmail},
      {
        headers: { Authorization: `Basic ${token}` },
      }
    )
      .then((response) => {
        console.log(response);;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="profile mr-3">
      <img
        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
        alt=""
        width="130"
        className="rounded mb-2 img-thumbnail"
      />
      <a onClick={handleShow} className="btn btn-outline-dark btn-sm btn-block">
        Edit profile
      </a>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ paddingLeft: "150px" }}>
            Edit your profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column justify-content-center text-center">
            <span>
              <p>old Username</p>
              <input type="text" style={{ width: "80%" }} 
              onChange={(event) => {
                setOldEmail(event.target.value);
              }}/>
            </span>
            <span>
              <p>new Username</p>
              <input
                type="text"
                style={{ width: "80%" }}
                onChange={(event) => {
                  setEditInf(event.target.value);
                }}
              />
            </span>
            <span>
              <p>old Email</p>
              <input type="text" style={{ width: "80%" }} />
            </span>
            <span>
              <p>new Email</p>
              <input type="text" style={{ width: "80%" }} />
            </span>
            <span>
              <p>old password</p>
              <input type="text" style={{ width: "80%" }} />
            </span>
            <span>
              <p>new password</p>
              <input type="text" style={{ width: "80%" }} />
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editEmail} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProfile;
