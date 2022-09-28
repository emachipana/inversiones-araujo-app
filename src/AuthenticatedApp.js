import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import NavbarAdmin from "./components/NavbarAdmin";
import CategoriesPage from "./pages/admin/categories";

function AuthenticatedApp() {
  const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: auto 1fr;
  `;

  const Section = styled.div`
    width: 100%;
    padding: 3rem 5rem;
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 720px) {
      padding: 2.5rem;
    }
  `;

  return (
    <Container>
      <NavbarAdmin
        requests={[]}
      />
      <AsideNav />
      <Section>
        <Routes>
          <Route path="/categories" index element={<CategoriesPage />}/>
        </Routes>
      </Section>
    </Container>
  );
}

export default AuthenticatedApp;
