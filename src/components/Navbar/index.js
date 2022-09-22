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
  const [isMove, setIsMove] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleOpen = (to) => {
    navigate(to);
    if(!isOpen) return;
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  }

  const handleClickMove = () => {
    if(window.scrollY >= 80) return setIsMove(true);
    setIsMove(false);
  }

  window.addEventListener("scroll", handleClickMove);

  const iconColor = ( isOpen || isMove ) ? colors.gray.normal : location === "/" ? colors.white : colors.gray.normal;

  return (
    <Style.Container
      location={location}
      isOpen={isOpen}
      isMove={isMove}
    >
      <Style.Logo
        onClick={() => navigate("/")}
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plant-1594842-1349472.png"
        alt="logo"
      />
      <div className="handle" onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen
          ?
            <IoClose
              css={Style.Icon}
              color={iconColor}
            />
          :
            <HiMenuAlt3 
              css={Style.Icon}
              color={iconColor}
            />
        }
      </div>
      <div className={isOpen ? "nav active" : "nav"}>
        <Style.NavItem
          location={location}
          to={"/"}
          isOpen={isOpen}
          isMove={isMove}   
          onClick={() => handleOpen("/")}
        >
          Inicio
        </Style.NavItem>
        <Style.NavItem
          location={location}
          to="/products"
          isOpen={isOpen}
          isMove={isMove}
          onClick={() => handleOpen("/products")}
        >
          Productos
        </Style.NavItem>
        <Style.NavItem
          location={location}
          to="/about"
          isOpen={isOpen}
          isMove={isMove}        
          onClick={() => handleOpen("/about")}
        >
          Sobre Nosotros
        </Style.NavItem>
        <Button
          size="sm"
          onClick={() => handleOpen("/login")}
        >ADMIN</Button>
      </div>
    </Style.Container>
  );
}

export default Navbar;
