import { Route, Routes, useLocation } from "react-router-dom";
import { Container } from "./styles";
import Login from "./pages/Admin/Login";

function AdminApp() {
  const { pathname } = useLocation();

  return (
    <Container>
      {
        !pathname.includes("login")
        &&
        <h1>admin navbar</h1>
      }
      <Routes>
        <Route path="login" element={<Login />} />
        <Route index exact path="/" element={<h1>Admin home page</h1>} />
        <Route path="calendario" element={<h1>Admin calendario page</h1>} />
        <Route path="invitro" element={<h1>Admin invitro page</h1>} />
        <Route path="invitro/:id" element={<h1>Admin invitro id page</h1>} />
        <Route path="productos" element={<h1>Admin productos page</h1>} />
        <Route path="productos/:id" element={<h1>Admin productos id page</h1>} />
        <Route path="pedidos" element={<h1>Admin pedidos page</h1>} />
        <Route path="pedidos/:id" element={<h1>Admin pedidos id page</h1>} />
        <Route path="facturas" element={<h1>Admin facturas page</h1>} />
        <Route path="facturas/:id" element={<h1>Admin facturas id page</h1>} />
        <Route path="clientes" element={<h1>Admin clientes page</h1>} />
        <Route path="ofertas" element={<h1>Admin ofertas page</h1>} />
        <Route path="mensajes" element={<h1>Admin mensajes page</h1>} />
        <Route path="perfil" element={<h1>Admin perfil page</h1>} />
      </Routes>
    </Container>
  );
}

export default AdminApp;
