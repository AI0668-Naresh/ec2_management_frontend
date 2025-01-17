import React from "react";
import { Link } from "react-router-dom";
import "../static/css/navbar.css"; // Ensure this path is correct
import { PiSunDimFill } from "react-icons/pi";
import Alogo from "../static/media/aggregate_logo.png"

function Navbar({ handleLogout }) {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Logo and Brand Name */}
          <Link className="navbar-brand" to="#">
            <img
              src={Alogo} // Replace with your logo path
              alt="AI-Ec2"
              className="navbar-logo"
            />
          </Link>

          {/* Toggler for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platform
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      AWS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      DO
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>

            {/* Right-Aligned Actions */}
            <div className="navbar-actions">
              {/* Dark Mode Toggle */}
              <div className="dark-mode-toggle">
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="checkbox-label">
                  <PiSunDimFill className="icon-moon" />
                  <i className="fas fa-sun icon-sun"></i>
                  <span className="ball"></span>
                </label>
              </div>

              {/* Admin and Logout Buttons */}
              <button
                className="btn btn-outline-danger admin-button"
                style={{ marginRight: "10px" }}
              >
                Admin
              </button>
              <button
                className="btn btn-outline-success logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
