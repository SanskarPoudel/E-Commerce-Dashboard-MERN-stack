import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  function logOut() {
    localStorage.clear();
    navigate("/signup");
  }
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/"> Products </Link>
        </li>
        <li>
          {" "}
          <Link to="/add"> Add Product </Link>
        </li>
        <li>
          <Link to="/update"> Update Product </Link>
        </li>

        <li>
          <Link to="/profile"> Profile </Link>
        </li>
        {auth ? (
          <li>
            <Link to="/signup" onClick={logOut}>
              {" "}
              Log out{" "}
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/signup"> Sign Up </Link>
          </li>
        )}
        <li>
          <Link to="/login">log In </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
