/** @jsxImportSource @emotion/react */
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/client/home";
import LoginPage from "./pages/client/login";
import ProductsPage from "./pages/client/products";
import { Button, FixedContainer, IconStyle, PopMessage } from "./pages/client/styles";
import { BsWhatsapp } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import Footer from "./components/Footer";

function UnauthenticatedApp() {
  const location = useLocation();

  return (
    <React.Fragment>
      <Navbar />
      <FixedContainer
        location={location.pathname}
        whatsapp
      >
        <Button
          whatsapp
          href="https://api.whatsapp.com/send?phone=51990849369&text=Hola!%20necesito%20m%C3%A1s%20informaci%C3%B3n"
          target="_blank"
        >
          <BsWhatsapp 
            css={IconStyle}
          />
        </Button>
      </FixedContainer>
      <FixedContainer
        location={location.pathname}      
      >
        <Button
          onClick={() => console.log("should be open quotation request view")}
        >
          <FcDocument 
            css={IconStyle}
          />
        </Button>
        <PopMessage>
          Cotizar
        </PopMessage>
      </FixedContainer>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer 
        location={location}
      />
    </React.Fragment>
  );
}

export default UnauthenticatedApp;
