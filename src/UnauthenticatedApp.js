import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/login";

function UnauthenticatedApp() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index path="/" element={<h1>This is home</h1>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default UnauthenticatedApp;
