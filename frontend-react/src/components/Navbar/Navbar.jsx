import PropTypes from "prop-types";
import React from "react";
import "./style.css";  // Import the styles associated with this Navbar component.

export const Navbar = ({  logo = "/img/logo.svg"}) => {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />  {/* Display the logo passed as a prop. */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#what-we-do">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#industries">
                Industries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#case-studies">
                Cases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trusted-brands">
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text actions">
            <a className="btn btn-light action-button" role="button" href="#">
              Let's Talk
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,  // Define the prop types for the Navbar component.
};
