/** @jsxImportSource @emotion/react */
import { FaAngleDown } from "react-icons/fa6";
import { COLORS, FlexRow, Text } from "../../styles"
import { useLocation } from "react-router-dom"; 
import { NavStyle } from "./styles";

function NavItem({ dropDown, redirect }) {
  const { pathname } = useLocation();

  return (
    <FlexRow
      onClick={() => redirect("/tienda")}
      style={{color: (dropDown || pathname === "/tienda") ? COLORS.persian : ""}}
      css={NavStyle}
    >
      <Text
        weight={700}
      >
        Tienda
      </Text>
      <FaAngleDown
        size={15}
      />
    </FlexRow>
  );
}

export default NavItem
