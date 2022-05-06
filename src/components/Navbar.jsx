import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname);
    // eslint-disable-next-line
  }, [location]);
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const showUserName = async () => {
    if (localStorage.getItem("token")) {
      const userName = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const userNameJson = await userName.json();
      setname(userNameJson.name);
      setemail(userNameJson.email);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="d-inline-block align-text-top"
            src="https://cdn-icons-png.flaticon.com/128/3075/3075908.png"
            width="27"
            height="27"
            alt="note"
          />
          iNotebook
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
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {localStorage.getItem("token") ? (
            <div className="fs-5" onClick={showUserName} >
              <ul className="navbar-nav">
                <li className="dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome User <i className="fa-solid fa-circle-user"></i>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        {name}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        style={{ fontSize: "11px" }}
                        id="item2"
                        to="#"
                      >
                        {email}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                Signup
              </Link>
            </form>
          ) : (
            <div>
              <button className="btn btn-primary mx-2" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
