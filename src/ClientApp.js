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
import Cart from "./pages/Client/Cart";

function ClientApp() {
  return (
    <ClientProvider>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="tienda" element={<Store />} />
        <Route path="tienda/:category" element={<Store />} />
        <Route path="tienda/:category/:id" element={<Product />} />
        <Route path="servicios" element={<Services />} />
        <Route path="contactanos" element={<Contact />} />
        <Route path="nosotros" element={<About />} />
        <Route path="carrito" element={<Cart />} />
      </Routes>
      <Footer />
    </ ClientProvider>
  )
}

export default ClientApp;
