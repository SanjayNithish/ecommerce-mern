import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import Login from "./components/Login";
import UserCart from "./components/UserCart";
import { useState } from "react";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/edititem/:id" element={<EditItem />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
