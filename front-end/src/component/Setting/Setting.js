import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Axios from "axios";

function Setting() {
  const token = localStorage.getItem("token");

  const [newEmail, setNewEmail] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [oldPhone, setOldPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const editEmail = () => {
    Axios.put(
      `profile/editemail`,
      { newEmail: newEmail, oldEmail: oldEmail },
      {
        headers: { Authorization: `Basic ${token}` },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editPhone = () => {
    Axios.put(
      `profile/editnumber`,
      { newPhone: newPhone, oldPhone: oldPhone },
      {
        headers: { Authorization: `Basic ${token}` },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editPassword = () => {
    Axios.put(
      `profile/editpassword`,
      { newPassword: newPassword, oldPassword: oldPassword },
      {
        headers: { Authorization: `Basic ${token}` },
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center mt-5 pt-2">
        <section
          className="mb-5 text-center pl-5 pt-5"
          style={{ width: "30%" }}
        >
          <p>Old password</p>
          <form>
            <div className="md-form md-outline">
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  setOldPassword(event.target.value);
                }}
              />
              <p className="pt-1">Set a new password </p>
            </div>

            <div className="md-form md-outline">
              <input
                type="password"
                className="form-control"
                onChange={(event) => {
                  setNewPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success
           mb-4 mt-4"
              onClick={editPassword}
            >
              Change password
            </button>
          </form>
        </section>
        <section
          className="mb-5 text-center pl-4 pt-5"
          style={{ width: "30%" }}
        >
          <p>Old Email</p>

          <form>
            <div className="md-form md-outline">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setOldEmail(event.target.value);
                }}
              />
              <p className="pt-1">Set a new Email</p>
            </div>

            <div className="md-form md-outline">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success
           mb-4 mt-4"
              onClick={editEmail}
            >
              Change Email
            </button>
          </form>
        </section>
        <section
          className="mb-5 text-center pl-4 pt-5"
          style={{ width: "30%" }}
        >
          <p>Old phone</p>

          <form>
            <div className="md-form md-outline">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setOldPhone(event.target.value);
                }}
              />
              <p className="pt-1">Set a new phone</p>
            </div>

            <div className="md-form md-outline">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success
           mb-4 mt-4"
              onClick={editPhone}
            >
              Change phone
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Setting;
