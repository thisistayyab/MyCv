import React from "react";
import icon from "../icon.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode} `}
      >
        <div className="container-fluid">
          <img
            src={icon}
            alt="Icon"
            style={{ width: "24px" }}
            className="mx-2 border rounded"
          />
          <Link className="navbar-brand" to="/">
            My Cv
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/summary" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/summary"
                >
                  Summary
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/education" ? "active" : ""
                  }`}
                  to="/education"
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/experience" ? "active" : ""
                  }`}
                  to="/experience"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/skill" ? "active" : ""
                  }`}
                  to="/skill"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/projects" ? "active" : ""
                  }`}
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              } `}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
