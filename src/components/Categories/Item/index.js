import { FaAngleDown } from "react-icons/fa6";
import { Container, Section, FlexColumn } from "./styles";
import { useNavigate } from "react-router-dom";
import { COLORS, FlexRow, Text } from "../../../styles";
import { capitalize } from "../../../helpers/capitalize";
import { FaCaretRight } from "react-icons/fa";

function Item({ category, num, withIcon, isActive, subCategories = [], isOpen, onClick }) {
  const navigate = useNavigate();
  const height = isOpen ? 55 + (subCategories.length * 28) + ((subCategories.length - 1) * 12) : 30;

  const handleClick = () => {
    window.scrollTo(0, 0);
    if(category === "todo") return navigate("/tienda");
    navigate(`/tienda/${category}`);
  }

  const openClick = (e) => {
    e.stopPropagation();

    onClick(category);
  }
  return (
    <Container
      height={height}
    >
      <Section>
        <Text
          hColor={COLORS.persian}
          color={isActive ? COLORS.persian : "inherit"}
          weight={700}
          onClick={handleClick}
        >
          { capitalize(category) }
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
              style={{transform: `rotate(${isOpen ? 180 : 0}deg)`, transition: ".3s ease-in"}}
              onClick={openClick}
              size={15}
              color={COLORS.taupe}
            />
          }
        </FlexRow>
      </Section>
      {
        category !== "todo"
        &&
        <FlexColumn>
          {
            subCategories.map((subCategory, index) => (
              <Section
                onClick={(e) => e.stopPropagation()}
                key={index}
                style={{borderBottom: `1px solid ${COLORS.platinium}`, padding: "0.2rem 0"}}
              >
                <FlexRow gap={0.2}>
                  <FaCaretRight />
                  <Text
                    hColor={COLORS.persian}
                    size={15}
                    weight={700}
                  >
                    { capitalize(subCategory.name) }
                  </Text>
                </FlexRow>
                <Text
                  size={14}
                  color={COLORS.taupe}
                >
                  ({subCategory.products})
                </Text>
              </Section>
            ))
          }
        </FlexColumn>
      }
    </Container>
  );
}

export default Item;
