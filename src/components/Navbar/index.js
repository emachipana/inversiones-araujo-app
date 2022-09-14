/** @jsxImportSource @emotion/react */
import * as Style from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoClose } from "react-icons/io5"
import { HiMenuAlt3 } from "react-icons/hi";
import { colors } from "../../styles";
import Button from "../Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

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
        <Button
          fontSize="14px"
          onClick={() => {
            navigate("/login");
            handleOpen();
          }}
        >ADMIN</Button>
      </div>
    </Style.Container>
  );
}

export default Navbar;
