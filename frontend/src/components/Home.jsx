import React from "react";
import Admin from "./Admin";
import User from "./User";

const Home = () => {
  if (localStorage.getItem("username") === "admin") {
    return (
      <>
        <Admin />
      </>
    );
  } else {
    return (
      <>
        <User />
      </>
    );
  }
};

export default Home;
