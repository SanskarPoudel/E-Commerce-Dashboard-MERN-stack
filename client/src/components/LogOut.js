import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();
  function loggingOut() {
    localStorage.removeItem("user");
    navigate("/signup");
  }
  return (
    <div className="logout">
      <h1>Are you sure you want to log out ? </h1>
      <button onClick={loggingOut} to="/signup">
        LOG OUT
      </button>
    </div>
  );
}
