import { FaAngleDown } from "react-icons/fa6";
import { Container, Line, Section } from "./styles";
import { useNavigate } from "react-router-dom";
import { COLORS, FlexRow, Text } from "../../../styles";

function Item({ category, num, withIcon, isActive, redirectTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if(redirectTo === "todo") return navigate("/tienda");
    navigate(`/tienda?category=${redirectTo}`);
  }

  return (
    <Container 
      onClick={handleClick}
      isActive={isActive}
    >
      <Section>
        <Text
          weight={700}
        >
          { category }
        </Text>
        <FlexRow>
          <Text
            size={14}
            color={COLORS.taupe}
          >
            ({num})
          </Text>
          {
            withIcon 
            &&
            <FaAngleDown
              size={14}
              color={COLORS.taupe}
            />
          }
        </FlexRow>
      </Section>
      <Line />
    </Container>
  );
}

export default Item;