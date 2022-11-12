import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Pokecards/PokeCards";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={< Home/>} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}