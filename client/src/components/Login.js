import React, { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevLogin) => {
      return {
        ...prevLogin,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(login);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="form" onSubmit={handleOnSubmit}>
        <input
          type="email"
          value={login.email}
          onChange={handleOnChange}
          name="email"
          placeholder="PLEASE ENTER YOUR EMAIL"
        />
        <input
          type="password"
          value={login.password}
          onChange={handleOnChange}
          name="password"
          placeholder="ENTER YOUR PASSWORD"
        />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
}
