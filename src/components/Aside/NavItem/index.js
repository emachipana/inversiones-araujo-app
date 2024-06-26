import { useLocation, useNavigate } from "react-router-dom";
import { FlexRow, Text } from "../../../styles";
import { FaChevronRight } from "react-icons/fa";
import { Container } from "./styles";

function NavItem({ Icon, children, redirectTo, setIsOpen, isOpen, isLogout, isActive }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    if(isOpen) setIsOpen(false);
    navigate(redirectTo);
  }

  return (
    <Container
      onClick={handleClick}
      isActive={isActive || (pathname === redirectTo)}
    >
      <FlexRow gap={0.8}>
        <Icon
          style={{marginTop: "-3px"}}
          size={20}
        />
        <Text
          size={17}
          weight={700}
        >
          { children }
        </Text>
      </FlexRow>
      {
        !isLogout
        &&
        <FaChevronRight 
          size={15}
        />
      }
    </Container>
  );
}

export default NavItem;
