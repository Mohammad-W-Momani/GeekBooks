import React from "react";
import Navbar from "../../Navbar/Navbar";
import FollowButton from "./FollowButton";

const OtherProfile = ({
  username,
  email,
  phone,
  followers,
  following,
  usernameParams,
}) => {
  return (
    <div>
      <Navbar />
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img
                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/13/lion-king.jpeg?width=990"
                    alt=""
                    width="130"
                    className="rounded mb-2 img-thumbnail"
                  />
                  <div className="d-flex">
                    <span className="d-flex">
                      <h5 className="font-weight-bold mb-0 d-block pr-2">
                        {followers.length}
                      </h5>
                      <small className="text-muted pr-2 pt-1">Followers</small>
                    </span>
                    <span className="d-flex">
                      <h5 className="font-weight-bold mb-0 d-block pr-2">
                        {following.length}
                      </h5>
                      <small className="text-muted pt-1">Following</small>
                    </span>
                  </div>
                </div>
                <div className="media-body mb-5 ">
                  <h4 className="mt-0 mb-0 text-white mb-5">{username}</h4>
                </div>
              </div>
            </div>
            <FollowButton
              usernameParams={usernameParams}
              followers={followers}
            />
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              <div className="py-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0">{phone}</p>
                <p className="font-italic mb-0">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;

