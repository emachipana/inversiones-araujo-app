import { TiHome } from "react-icons/ti";
import NavItem from "./NavItem";
import { BackDrop, Container } from "./styles";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { GiShoppingBag, GiWallet } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { RiMessage3Fill, RiLogoutBoxFill } from "react-icons/ri";

function Aside({ isOpen, setIsOpen }) {
  return (
    <>
      <Container isOpen={isOpen}>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin"
          Icon={TiHome}
        >
          Inicio
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/calendario"
          Icon={FaCalendarAlt}
        >
          Calendario
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/invitro"
          Icon={PiPottedPlantFill}
        >
          In vitro
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/productos"
          Icon={GiShoppingBag}
        >
          Productos
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/pedidos"
          Icon={FaClipboardList}
        >
          Pedidos
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/facturas"
          Icon={GiWallet}
        >
          Facturación
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/clientes"
          Icon={FaUserGroup}
        >
          Clientes
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/ofertas"
          Icon={MdDiscount}
        >
          Ofertas
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/mensajes"
          Icon={RiMessage3Fill}
        >
          Mensajes
        </NavItem>
        <NavItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          redirectTo="/admin/login"
          Icon={RiLogoutBoxFill}
          isLogout
        >
          Salir
        </NavItem>
      </Container>
      {
        isOpen
        &&
        <BackDrop 
          onClick={() => setIsOpen(false)}
        />
      }
    </>
  );
}

export default Aside;
