/** @jsxImportSource @emotion/react */
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { AsideList, BackDrop, Close, IconStyle, ListItems, NavStyle } from "./styles";
import { COLORS, Text } from "../../styles";
import { Item, Line } from "./Menu/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useClient } from "../../context/client";
import { capitalize } from "../../helpers/capitalize";

function Aside({ isOpen, handleToggle, onClick, ...props }) {
  const { categories } = useClient();
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
          css={NavStyle}
          onClick={() => redirect("/")}
          color={pathname === "/" ? COLORS.persian : ""}
        >
          Inicio
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavStyle}
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
          {
            categories.map((category, index) => (
              <Item
                key={index}
                onClick={() => redirect(`/tienda?category=${category.name}`)}
                isActive={query === category.name}
              >
                {capitalize(category.name)}
                <Line width={(category.name.length + 1) * 2} />
              </Item>
            ))
          }
        </ListItems>
        <a
          href="http://localhost:3000/agroinvitro"
          target="_blank"
          rel="noreferrer"
        >
          <Text
            weight={700}
            size={18}
            css={NavStyle}
          >
            Agroinvitro
          </Text>
        </a>
        <Text
          weight={700}
          size={18}
          css={NavStyle}
          onClick={() => redirect("/servicios")}
          color={pathname === "/servicios" ? COLORS.persian : ""}
        >
          Servicios
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavStyle}
          onClick={() => redirect("/contactanos")}
          color={pathname === "/contactanos" ? COLORS.persian : ""}
        >
          Contáctanos
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavStyle}
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
