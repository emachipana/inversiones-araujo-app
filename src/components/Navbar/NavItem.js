/** @jsxImportSource @emotion/react */
import { FaAngleDown } from "react-icons/fa6";
import { COLORS, FlexRow, Text } from "../../styles"
import { useLocation, useNavigate } from "react-router-dom"; 
import { NavStyle } from "./styles";

function NavItem({ dropDown }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <FlexRow
      onClick={() => navigate("/tienda")}
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
