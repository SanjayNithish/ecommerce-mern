import React from "react";
import "./UserNavbar.css";
import { useNavigate } from "react-router";

const UserNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1>Shopping App</h1>
        <div>
          <button
            className="cart_button"
            type="button"
            onClick={() => navigate("/cart")}
          >
            cart
          </button>
          <button
            className="login_button"
            type="button"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
