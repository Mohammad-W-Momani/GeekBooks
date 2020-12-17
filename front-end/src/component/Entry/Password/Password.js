import React from "react";
import "./Password.css"

function Password() {
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
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Save"
                  className="btn float-right password_btn"
                  style={{ background: " rgba(44, 83, 255, 0.315)" }}
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
