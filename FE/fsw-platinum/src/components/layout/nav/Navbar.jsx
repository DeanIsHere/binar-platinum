import React from "react";
import logo from "../../../assets/images/echamp-white.png";
import Login from "../../login/login";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { authFirebase } from "../../../config/firebase";
import { checkDataLogin, firebaseLogout } from "../../../action/autentication";
import { useNavigate } from "react-router-dom";

const Navbar = ({ bgColor, user, transparant = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const { user: userGame } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const toggleModal = () => {
    setShowModal((previousValue) => !previousValue);
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/");
    firebaseLogout();
  };
  useEffect(() => {
    checkDataLogin(setIsLogin);
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={
          transparant
            ? null
            : { backgroundColor: bgColor ? `${bgColor}` : "#212529" }
        }
        id="mainNav"
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
            {isLogin ? (
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href={`/profile/${userGame?.uid}`}>
                    PROFILE
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#" onClick={handleLogout}> */}
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      if (window.confirm("Are you sure to Logout?")) {
                        handleLogout();
                      }
                    }}
                  >
                    LOGOUT
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={toggleModal}>
                    LOGIN
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <Login showModal={showModal} toggleFunc={toggleModal} />
    </>
  );
};

export default Navbar;
