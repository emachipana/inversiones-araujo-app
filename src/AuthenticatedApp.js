import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";

function AuthenticatedApp() {
  const [isOpen, setIsOpen] = useState(false);

  const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: auto 1fr;
  `;

  return (
    <Container>
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
