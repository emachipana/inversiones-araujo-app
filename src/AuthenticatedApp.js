import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import NavbarAdmin from "./components/NavbarAdmin";

function AuthenticatedApp() {
  const [isOpen, setIsOpen] = useState(false);

  const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: auto 1fr;
  `;

  return (
    <Container>
      <NavbarAdmin
        requests={[]}
      />
      <AsideNav 
        navOpen={isOpen}
        handleOpen={setIsOpen}
      />
      <Routes>
        <Route path="/" index element={<div><h1>Hola user</h1></div>}/>
      </Routes>
    </Container>
  );
}

export default AuthenticatedApp;
