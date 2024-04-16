import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Client/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Client/Contact";
import Services from "./pages/Client/Services";
import About from "./pages/Client/About";

function ClientApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route path="tienda" element={<h1>tienda page</h1>} />
        <Route path="tienda/producto/:id" element={<h1>tienda page producto detail</h1>} />
        <Route path="servicios" element={<Services />} />
        <Route path="contactanos" element={<Contact />} />
        <Route path="nosotros" element={<About />} />
        <Route path="carrito" element={<h1>carrito page</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default ClientApp;
