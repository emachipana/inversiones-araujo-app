/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../styles";
import { IconNavBar, Item, Text } from "./styles";

function NavItem({ to, isOpen, children, Icon, click = "" }) {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <Item
      onClick={() => click ? click() : navigate(to)}
      location={location}
      path={to}
      isOpen={isOpen}
    >
      <Icon
        color={location.includes(to) ? colors.green.normal : "white"}
        css={IconNavBar}
      />
      <Text
        isOpen={isOpen}
        location={location}
        path={to}
      > 
        { children }
      </Text>
    </Item>
  );
}

export default NavItem;
