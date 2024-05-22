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
  const { pathname } = useLocation();
  const category = pathname.split("/")[2] || "todo";

  const redirect = (to) => {
    window.scrollTo(0, 0);
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
            isActive={category === "todo"}
          >
            Todo
            <Line width={8} />
          </Item>
          {
            categories.map((item, index) => (
              <Item
                key={index}
                onClick={() => redirect(`/tienda/${item.name}`)}
                isActive={category === item.name}
              >
                {capitalize(item.name)}
                <Line width={(item.name.length + 1) * 2} />
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
