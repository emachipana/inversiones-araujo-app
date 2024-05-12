import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Client/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Client/Contact";
import Services from "./pages/Client/Services";
import About from "./pages/Client/About";
import Store from "./pages/Client/Store";
import Product from "./pages/Client/Product";
import { ClientProvider } from "./context/client";

function ClientApp() {
  return (
    <ClientProvider>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="tienda" element={<Store />} />
        <Route path="tienda/producto/:id" element={<Product />} />
        <Route path="servicios" element={<Services />} />
        <Route path="contactanos" element={<Contact />} />
        <Route path="nosotros" element={<About />} />
        <Route path="carrito" element={<h1>carrito page</h1>} />
      </Routes>
      <Footer />
    </ ClientProvider>
  )
}

export default ClientApp;
