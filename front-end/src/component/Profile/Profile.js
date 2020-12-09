import React from "react";
import Navbar from "./Navbar/Navbar";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div class="row py-5 px-4">
        <div class="col-md-5 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
              <div class="media align-items-end profile-head">
                <div class="profile mr-3 pt-2">
                  <img
                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
                    alt="..."
                    width="130"
                    class="rounded mb-2 img-thumbnail "
                  />
                  <h4>Mohammad momani</h4>
                  <a href="#" class="btn btn-outline-dark btn-sm btn-block">
                    Edit profile
                  </a>
                </div>
                <div class="media-body mb-5 text-white">
                  <h4 class="mt-0 mb-0">Mark Williams</h4>
                  <p class="small mb-4">
                    {" "}
                    <i class="fas fa-map-marker-alt mr-2"></i>New York
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-start text-center">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">745</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-user mr-1"></i>Followers
                  </small>
                </li>
                <li class="list-inline-item">
                  <h5 class="font-weight-bold mb-0 d-block">340</h5>
                  <small class="text-muted">
                    {" "}
                    <i class="fas fa-user mr-1"></i>Following
                  </small>
                </li>
              </ul>
            </div>
            <div class="px-4 py-3">
              <h5 class="mb-0">About</h5>
              <div class="p-4 rounded shadow-sm bg-light">
                <h6 class="font-italic mb-0">Web Developer</h6>
                <h6 class="font-italic mb-0">Lives in Amman</h6>
                <p class="font-italic mb-0 d-flex">
                  {" "}
                  <h6>20yr</h6>
                </p>
              </div>
            </div>
            <div class="py-4 px-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h5 class="mb-0">Posts</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
