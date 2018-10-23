import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dashboard from "../Dashboard";
import "../Dashboard/Dashboard.css";

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
            to="/directory/:id"
            className={
              window.location.pathname === "/directory/:id" || window.location.pathname === "/directory/:id"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Forum Directory
          </Link>
      
       
        </li>

        <li className="nav-item">
          <Link
            to="/lessonplans"
            className={
              window.location.pathname === "/topic/:id"
                ? "nav-link active"
                : "nav-link4"
            }
          >
          Lesson Plans
          </Link>         
        </li>
        
      </ul>

      
      <li className="nav-item">
          <Link
            to="/Account"
            className={
              window.location.pathname === "/Account" || window.location.pathname === "/Account"
                ? "nav-link active"
                : "nav-link"
            }
          >
           <div className="loginArea" id="loginArea">Welcome Guest.  Please Login</div>
          </Link>

        </li>
      </div>
    
  </nav>
);

export default Navbar;
