import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

function UnauthenticatedApp() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default UnauthenticatedApp;
