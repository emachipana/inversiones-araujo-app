/** @jsxImportSource @emotion/react */
import { Container, IconStyle, Section} from "./styles";
import { HiMenu } from "react-icons/hi";
import NavItem from "./nav-item";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { BiCategory, BiLogOut } from "react-icons/bi";
import { HiDocumentSearch, HiDocumentDuplicate } from "react-icons/hi";
import { TbUserCircle } from "react-icons/tb";
import { useAuth } from "../../context/auth";

function AsideNav({ navOpen, handleOpen }) {
  const { logout } = useAuth();

  return (
    <Container isOpen={navOpen}>
      <HiMenu
        style={{transform: `rotate(${navOpen ? "90deg" : "0deg"})`}}
        css={IconStyle}
        onClick={() => handleOpen(!navOpen)}
      />
      <Section>
        <NavItem
          Icon={IoHome}
          to="/"
          isOpen={navOpen}
        >
          Inicio
        </NavItem>
        <NavItem
          Icon={BiCategory}
          to="/categories"
          isOpen={navOpen}
        >
          Categorías
        </NavItem>
        <NavItem
          Icon={IoBagHandle}
          to="/products"
          isOpen={navOpen}
        >
          Productos
        </NavItem>
        <NavItem
          Icon={HiDocumentSearch}
          to="/requests"
          isOpen={navOpen}
        >
          Solicitudes
        </NavItem>
        <NavItem
          Icon={HiDocumentDuplicate}
          to="/quotations"
          isOpen={navOpen}
        >
          Cotizaciones
        </NavItem>
        <NavItem
          Icon={TbUserCircle}
          to="/profile"
          isOpen={navOpen}
        >
          Perfil
        </NavItem>
        </Section>
        <NavItem
          click={logout}
          Icon={BiLogOut}
          to="/login"
          isOpen={navOpen}
        >
          Salir
        </NavItem>
    </Container>
  );
}

export default AsideNav;
