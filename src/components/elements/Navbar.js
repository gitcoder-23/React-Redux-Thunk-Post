import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link class="navbar-brand" to="/">
          React-Redux-Thunk Posts -Developed by Prabhat
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="!#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Posts
              </Link>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="!#">
                Contact
              </a>
            </li> */}
          </ul>
          <Link to="/addPost" className="btn btn-dark">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
