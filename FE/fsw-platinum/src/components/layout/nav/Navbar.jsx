import React from "react";
import logo from "../../../assets/images/echamp-white.png";
import Login from '../../login/login'
import { useState } from "react";

const Navbar = ({ bgColor, user }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((previousValue) => !previousValue);
    }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${bgColor ? `${bgColor}` : "navbar-dark"
          } fixed-top`}
        id="mainNav"
        style={{ backgroundColor: bgColor ? `${bgColor}` : "#212529" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-5 py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#game">
                  GAME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#leaderboard">
                  LEADERBOARD
                </a>
              </li>
            </ul>
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={toggleModal}>
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Login
        showModal={showModal}
        toggleFunc={toggleModal} />
    </>
  );
};

export default Navbar;
