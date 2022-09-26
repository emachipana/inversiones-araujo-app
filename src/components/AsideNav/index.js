/** @jsxImportSource @emotion/react */
import { Container, IconStyle, Section} from "./styles";
import { HiMenu } from "react-icons/hi";
import NavItem from "./nav-item";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { BiCategory, BiLogOut } from "react-icons/bi";
import { HiDocumentSearch, HiDocumentDuplicate } from "react-icons/hi";
import { TbUserCircle } from "react-icons/tb";
import { useAuth } from "../../context/auth";
import { useState } from "react";

function AsideNav() {
  const { logout } = useAuth();
  const navOpen = localStorage.getItem("nav-bar-position");
  const [isOpen, setIsOpen] = useState(navOpen === "true" || false);

  const handleOpen = () => {
    localStorage.setItem("nav-bar-position", !isOpen);
    console.log(typeof navOpen);
    setIsOpen(!isOpen);
  }

  return (
    <Container isOpen={isOpen}>
      <HiMenu
        style={{transform: `rotate(${isOpen ? "90deg" : "0deg"})`}}
        css={IconStyle}
        onClick={() => handleOpen()}
      />
      <Section>
        <NavItem
          Icon={IoHome}
          to="/"
          isOpen={isOpen}
        >
          Inicio
        </NavItem>
        <NavItem
          Icon={BiCategory}
          to="/categories"
          isOpen={isOpen}
        >
          Categorías
        </NavItem>
        <NavItem
          Icon={IoBagHandle}
          to="/products"
          isOpen={isOpen}
        >
          Productos
        </NavItem>
        <NavItem
          Icon={HiDocumentSearch}
          to="/requests"
          isOpen={isOpen}
        >
          Solicitudes
        </NavItem>
        <NavItem
          Icon={HiDocumentDuplicate}
          to="/quotations"
          isOpen={isOpen}
        >
          Cotizaciones
        </NavItem>
        <NavItem
          Icon={TbUserCircle}
          to="/profile"
          isOpen={isOpen}
        >
          Perfil
        </NavItem>
        </Section>
        <NavItem
          click={logout}
          Icon={BiLogOut}
          to="/login"
          isOpen={isOpen}
        >
          Salir
        </NavItem>
    </Container>
  );
}

export default AsideNav;
