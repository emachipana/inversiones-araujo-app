/** @jsxImportSource @emotion/react */
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { AsideList, BackDrop, Close, IconStyle, ListItems, NavItem } from "./styles";
import { Text } from "../../styles";
import { Item, Line } from "./Menu/styles";

function Aside({ isOpen, handleToggle, onClick, ...props }) {
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
        >
          Inicio
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
        >
          Tienda
        </Text>
        <ListItems>
          <Item>
            Todo
            <Line width={8} />
          </Item>
          <Item>
            Campo
            <Line width={13} />
          </Item>
          <Item>
            Laboratorio
            <Line width={18} />
          </Item>
          <Item>
            Invernadero
            <Line width={22} />
          </Item>
          <Item>
            Riego tecnificado
            <Line width={30} />
          </Item>
        </ListItems>
        <Text
          weight={700}
          size={18}
          css={NavItem}
        >
          Agroinvitro
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
        >
          Servicios
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
        >
          Contáctanos
        </Text>
        <Text
          weight={700}
          size={18}
          css={NavItem}
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
