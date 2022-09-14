import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function UnauthenticatedApp() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route index path="/" element={<h1>This is home</h1>} />
      </Routes>
    </React.Fragment>
  );
}

export default UnauthenticatedApp;
