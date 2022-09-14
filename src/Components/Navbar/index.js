/** @jsxImportSource @emotion/react */
import * as Style from "./styles";
import { Link, useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { useState } from "react";
import { IoClose } from "react-icons/io5"
import { HiMenuAlt3 } from "react-icons/hi";
import { colors } from "../../styles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  const handleOpen = () => {
    if(!isOpen) return
    setIsOpen(!isOpen);
  }

  return (
    <Style.Container style={{display: location === "/login" ? "none" : undefined }}>
      <Style.Logo src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plant-1594842-1349472.png" alt="logo"/>
      <div className="handle" onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen
          ?
            <IoClose
              css={Style.Icon}
              color={colors.gray.normal}
            />
          :
            <HiMenuAlt3 
              css={Style.Icon}
              color={colors.gray.normal}
            />
        }
      </div>
      <div className={isOpen ? "nav active" : "nav"}>
        <Style.NavItem 
          style={Style.activeStyle}
          to="/"
          onClick={() => handleOpen()}
        >
          Inicio
        </Style.NavItem>
        <Style.NavItem 
          style={Style.activeStyle}
          to="/products"
          onClick={() => handleOpen()}
        >
          Productos
        </Style.NavItem>
        <Style.NavItem 
          style={Style.activeStyle}
          to="/about"
          onClick={() => handleOpen()}
        >
          Sobre Nosotros
        </Style.NavItem>
        <Link to="/login">
          <Button css={Style.ButtonStyle}>ADMIN</Button>
        </Link>
      </div>
    </Style.Container>
  );
}

export default Navbar;
