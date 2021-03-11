import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import "./Navbar.scss";
const Navbar = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const username = decoded.username;
  const linkStyle = {
    WebkitTextFillColor: "#343a40",
    WebkitTextStrokeWidth: "0.5px",
    WebkitTextStrokeColor: "#28a745",
    fontSize: "110%",
  };

  const signOut = () => {
    localStorage.clear();
  };
  return (
    <header>
      <nav className="nav">
        <div className="nav__content">
          <div className="nav__content__log">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpzM209QcHDyExbY6ZucdhrH-B5Iz5RUzrg&usqp=CAU"
              width="40"
              height="30"
              alt=""
              className="nav__content__log--navLogo"
            />

            <div className="nav__content__log--navName">
              <a href="/" style={linkStyle}>
                Geekbooks
              </a>
            </div>
          </div>
          <div className="nav__content__search">
            <form className="nav__content__search__form">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                className="nav__content__search__form--search"
              />
              <button type="submit" className="nav__content__search__form--btn">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="nav__content__links">
            <ul className={"nav__content__links__list"}>
              <li className="nav__content__links__list--1">
                <a href="/" style={linkStyle}>
                  Home
                </a>
              </li>

              <li className="nav__content__links__list--2">
                <a href={`/${username}`} style={linkStyle}>
                  Profile
                </a>
              </li>

              <li className="nav__content__links__list--3">
                <a href="/" style={linkStyle}>
                  Books
                </a>
              </li>

              <li className="nav__content__links__list--5">
                <div className="dropdown">
                  <a href="#" className="dropdown--icon">
                    <i className="fa fa-chevron-down"></i>
                  </a>
                  <div className="dropdown__content">
                    <a href="/" onClick={signOut}>
                      Sign Out
                    </a>

                    <a href="/setting">Setting</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
