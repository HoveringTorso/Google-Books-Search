import React from "react";
import "./Nav.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" id="home">
            <a className="nav-link" href="/">
              <button type="button" className="btn btn-outline-light search">
                <i className="fas fa-search"></i> Search Books
              </button>
            </a>
          </li>
          <li className="nav-item" id="report">
            <a className="nav-link" href="/saved">
              <button type="button" className="btn btn-outline-light saved">
                Saved Books <i className="far fa-save"></i>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
