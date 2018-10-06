import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <Link className="navbar-brand" to="/">
  ENG Share
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/lessonPlans"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Lesson Plans
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
