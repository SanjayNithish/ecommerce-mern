import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmittion = (e) => {
    e.preventDefault();
    localStorage.setItem("username", user);
    navigate("/home");
  };

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUser(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <form className="Login" onSubmit={onSubmittion}>
      <div className="login_Container">
        <div className="login_title">Login</div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          value={user}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
