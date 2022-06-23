import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister((prevRegister) => {
      return {
        ...prevRegister,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    let result = await fetch("http://localhost:3004/register", {
      method: "POST",
      body: JSON.stringify({ ...register }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");
    auth && navigate("/");
  }, []);

  return (
    <div className="signup" onSubmit={handleSubmit}>
      <form className="signupForm">
        <h1>Register</h1>
        <input
          value={register.name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        <input
          value={register.email}
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <input
          value={register.password}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
