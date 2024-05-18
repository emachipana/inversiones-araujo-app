import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Container, Section } from "./styles";
import Login from "./pages/Admin/Login";
import AdminNavbar from "./components/AdminNavbar";
import Aside from "./components/Aside";
import Products from "./pages/Admin/Products";
import Product from "./pages/Admin/Product";
import Orders from "./pages/Admin/Orders";
import VitroOrders from "./pages/Admin/VitroOrders";
import { AdminProvider } from "./context/admin";
import Home from "./pages/Admin/Home";
import Clients from "./pages/Admin/Clients";
import Messages from "./pages/Admin/Messages";

function AdminApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <AdminProvider>
      <Container>
        {
          !pathname.includes("login")
          &&
          <>
            <AdminNavbar
              setIsOpen={setIsOpen}
            />
            <Aside 
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </>
        }
        <Section>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route index exact path="/" element={<Home />} />
            <Route path="calendario" element={<h1>Admin calendario page</h1>} />
            <Route path="invitro" element={<VitroOrders />} />
            <Route path="invitro/:id" element={<h1>Admin invitro id page</h1>} />
            <Route path="productos" element={<Products />} />
            <Route path="productos/:id" element={<Product />} />
            <Route path="pedidos" element={<Orders />} />
            <Route path="pedidos/:id" element={<h1>Admin pedidos id page</h1>} />
            <Route path="facturas" element={<h1>Admin facturas page</h1>} />
            <Route path="facturas/:id" element={<h1>Admin facturas id page</h1>} />
            <Route path="clientes" element={<Clients />} />
            <Route path="ofertas" element={<h1>Admin ofertas page</h1>} />
            <Route path="mensajes" element={<Messages />} />
            <Route path="perfil" element={<h1>Admin perfil page</h1>} />
          </Routes>
        </Section>
      </Container>
    </AdminProvider>
  );
}

export default AdminApp;
