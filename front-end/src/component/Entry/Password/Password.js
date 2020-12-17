import React from "react";
import Axios from "axios";
import "./Password.css";

function Password() {
  const token = localStorage.getItem("token");

  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

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
    <div className="containers">
      <div
        className="d-flex justify-content-center"
        style={{ paddingTop: "130px" }}
      >
        <div className="card d-flex ">
          <div className="card-header">
            <h3 className="pt-3">Change password</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Old password"
                  onChange={(event) => {
                    setOldPassword(event.target.value);
                  }}
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="New password"
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Save"
                  className="btn float-right password_btn"
                  style={{ background: " rgba(44, 83, 255, 0.315)" }}
                  onClick={editPassword}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Already Geek?<a href="login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
