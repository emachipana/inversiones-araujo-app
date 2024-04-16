import { FaAngleDown } from "react-icons/fa6";
import { COLORS, FlexRow, Text } from "../../../../styles";
import { Container, Line, Section } from "./styles";
import { useNavigate } from "react-router-dom";

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
          size={17}
          weight={700}
        >
          { category }
        </Text>
        <FlexRow>
          <Text
            size={15}
            color={COLORS.taupe}
          >
            ({num})
          </Text>
          {
            withIcon 
            &&
            <FaAngleDown
              size={15}
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
