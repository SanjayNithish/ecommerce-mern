import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <h1>Shopping App</h1>
        <div>
          <button
            className="add_product_button"
            type="button"
            onClick={() => navigate("/addItem")}
          >
            Add Item
          </button>
          <button
            className="logout_button"
            type="button"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
