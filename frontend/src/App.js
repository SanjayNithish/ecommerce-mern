import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import Login from "./components/Login";
import UserCart from "./components/UserCart";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/edititem/:id" element={<EditItem />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
