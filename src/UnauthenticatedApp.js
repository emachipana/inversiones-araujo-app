import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/client/home";
import LoginPage from "./pages/client/login";
import ProductsPage from "./pages/client/products";
import { Container } from "./AuthenticatedApp";

function UnauthenticatedApp() {
  return (
    <React.StrictMode>
      <Navbar />
      <Container>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Container>
    </React.StrictMode>
  );
}

export default UnauthenticatedApp;
