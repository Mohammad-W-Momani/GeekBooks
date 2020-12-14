import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Navbar.css";
const Navbar = () => {
  //   const logout=()=> {
  //     localStorage.clear();
  //     window.location.href = '/localhost:3000';
  // }

  const color = "success";
  const btOutLine = `btn btn-outline-success`;
  return (
    <nav className={`navbar navbar-dark bg-dark border-${color} col-md-12`}>
      <div className="header d-flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpzM209QcHDyExbY6ZucdhrH-B5Iz5RUzrg&usqp=CAU"
          width="50"
          height="40"
          className="d-inline-block align-top"
          alt=""
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <h5 className="page-name pt-2">GeekBooks</h5>
        </Link>
      </div>

      <form className="form-inline d-flex justify-content-center col-md-6 ml-5 pl-5">
        <input
          className="form-control mr-sm-2 shadow-none pr-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className={`${btOutLine} my-2 my-sm-0`} type="submit">
          Search
        </button>
      </form>

      <div className="links pr-5 ">
        <svg
          width="3em"
          height="3em"
          viewBox="0 0 16 16"
          className={` btn btn-${color} rounded`}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
          <path
            fillRule="evenodd"
            d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <Link to="/groups">
          <p className={`${btOutLine} p-2 m-2 `}> Groups </p>
        </Link>
        <Link to="/Books">
          <p className={`${btOutLine} p-2 m-2 `}>Books</p>
        </Link>

        <p className={`${btOutLine} p-2 m-2 `}> Profile </p>
      </div>

      <Dropdown className="p-2 text-right">
        <Dropdown.Toggle
          variant={`${color}`}
          id="dropdown-basic dropdown "
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <div className={`${btOutLine} nav-links`}>
              Sign out{" "}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"
                />
              </svg>
            </div>
          </Dropdown.Item>
          <Dropdown.Item href="setting">
            <div className={`${btOutLine} nav-links `}>
              Setting <ion-icon name="cog-sharp"></ion-icon>
            </div>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
