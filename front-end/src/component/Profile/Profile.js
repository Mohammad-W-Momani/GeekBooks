import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <Navbar />
      </Link>

      <div class="row py-5 px-4">
        <div class="col-md-5 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3">
                  <img
                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
                    alt=""
                    width="130"
                    class="rounded mb-2 img-thumbnail"
                  />
                  <a href="#" class="btn btn-outline-dark btn-sm btn-block">
                    Edit profile
                  </a>
                </div>
                <div class="media-body mb-5 text-white">
                  <h4 class="mt-0 mb-0">Mohammad Momani</h4>
                  <p class="small mb-4">Ajlon</p>
                </div>
              </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">745</h5>
                  <small class="text-muted">Followers</small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">340</h5>
                  <small class="text-muted">Following</small>
                </li>
              </ul>
            </div>
            <div class="px-4 py-3">
              <h5 class="mb-0">About</h5>
              <div class="py-4 rounded shadow-sm bg-light">
                <p class="font-italic mb-0">Web Developer</p>
                <p class="font-italic mb-0">Lives in Ajlon</p>
                <p class="font-italic mb-0">20yr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
