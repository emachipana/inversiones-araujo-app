import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import NavbarAdmin from "./components/NavbarAdmin";
import CategoriesPage from "./pages/admin/categories";
import EditProductPage from "./pages/admin/edit-product";
import ProductsPage from "./pages/admin/products";
import ProfilePage from "./pages/admin/profile";

function AuthenticatedApp() {
  const Container = styled.div`
    display: flex;
    width: 100%;
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
          <Route path="/categories" index element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Section>
    </Container>
  );
}

export default AuthenticatedApp;
