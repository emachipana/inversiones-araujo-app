import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Client/Home";

function ClientApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="tienda" element={<h1>tienda page</h1>} />
        <Route path="servicios" element={<h1>services page</h1>} />
        <Route path="contactanos" element={<h1>contactanos page</h1>} />
        <Route path="nosotros" element={<h1>nostros page</h1>} />
        <Route path="carrito" element={<h1>carrito page</h1>} />
      </Routes>
    </>
  )
}

export default ClientApp;
