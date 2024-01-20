import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

function Navbar() {
  const { user, logout } = useAuth();

  const [iscollapsed, setIsCollapsed] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container-fluid nav-container">
        <NavLink to="/" className="navbar-brand logo">
          CareBuddy
        </NavLink>
        <button
          className="navbar-toggler"
          id="navbtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse nav-section justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link nav-text">
                Home
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item userCheck">
              {user ? (
                <div className="userPresent">
                  <p className="nav-text">
                    Welcome <span className="userName"> {user.firstName}!</span>
                  </p>
                  <img className="userImg" src="" alt="" />
                  <button
                    className="btn btn-outline-primary logout"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink
                  to="login"
                  className="nav-link nav-text"
                  activeclassname="active"
                >
                  Login/SignUp
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
