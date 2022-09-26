import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/client/home";
import LoginPage from "./pages/client/login";

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
