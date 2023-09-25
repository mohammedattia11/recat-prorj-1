import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark py-4 ">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold" to="/">
          START FRAMEWORK
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link fw-bold " aria-current="page" to="about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link fw-bold " to="portfolio">
                PORTFOLIO
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link fw-bold " to="contact">
                CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
