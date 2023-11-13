import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Spooky from "./Components/Spooky/Spooky";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spooky" element={<Spooky />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
