/** @jsxImportSource @emotion/react */
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { AsideList, BackDrop, Close, IconStyle, ListItems, NavItem } from "./styles";
import { COLORS, Text } from "../../styles";
import { Item, Line } from "./Menu/styles";
import { useNavigate, useLocation } from "react-router-dom";

function Aside({ isOpen, handleToggle, onClick, ...props }) {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const query = search.split("=")[1];

  const redirect = (to) => {
    onClick();

    navigate(to);
  }

  return (
    <>
      {
        isOpen
        &&
        <BackDrop 
          {...props} 
          onClick={onClick}
        />
      }
      <AsideList 
        isOpen={isOpen}
        {...props}
      >
        <IoClose 
          css={Close}
          onClick={onClick}
        />
        <Text
          weight={700}
          size={18}
          css={NavItem}
          onClick={() => redirect("/")}
          color={pathname === "/" ? COLORS.persian : ""}
        >
          Inicio
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
          onClick={() => redirect("/tienda")}
          color={pathname === "/tienda" ? COLORS.persian : ""}
        >
          Tienda
        </Text>
        <ListItems>
          <Item
            onClick={() => redirect("/tienda")}
            isActive={pathname === "/tienda" && !query}
          >
            Todo
            <Line width={8} />
          </Item>
          <Item
            onClick={() => redirect("/tienda?category=campo")}
            isActive={query === "campo"}
          >
            Campo
            <Line width={13} />
          </Item>
          <Item
            onClick={() => redirect("/tienda?category=laboratorio")}
            isActive={query === "laboratorio"}
          >
            Laboratorio
            <Line width={18} />
          </Item>
          <Item
            onClick={() => redirect("/tienda?category=invernadero")}
            isActive={query === "invernadero"}
          >
            Invernadero
            <Line width={22} />
          </Item>
          <Item
            onClick={() => redirect("/tienda?category=riego")}
            isActive={query === "riego"}
          >
            Riego tecnificado
            <Line width={30} />
          </Item>
        </ListItems>
        <a
          href="http://localhost:3000/agroinvitro"
          target="_blank"
          rel="noreferrer"
        >
          <Text
            weight={700}
            size={18}
            css={NavItem}
          >
            Agroinvitro
          </Text>
        </a>
        <Text
          weight={700}
          size={18}
          css={NavItem}
          onClick={() => redirect("/servicios")}
          color={pathname === "/servicios" ? COLORS.persian : ""}
        >
          Servicios
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
          onClick={() => redirect("/contactanos")}
          color={pathname === "/contactanos" ? COLORS.persian : ""}
        >
          Contáctanos
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
          onClick={() => redirect("/nosotros")}
          color={pathname === "/nosotros" ? COLORS.persian : ""}
        >
          Sobre nosotros
        </Text>
        <IoPersonSharp
          css={IconStyle}
          size={33}
          onClick={handleToggle}
        />
      </AsideList>
    </>
  );
}

export default Aside;
