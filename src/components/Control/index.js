import { COLORS, Text } from "../../styles";
import { Container, Item } from "./styles";

function Control({ number, setNumber, stock, onClick }) {
  const handleAdd = () => {
    if(number >= stock) return;

    setNumber(number + 1);
    onClick && onClick(number + 1);
  }

  const handleRes = () => {
    if(number <= 1) return;

    setNumber(number - 1);
    onClick && onClick(number - 1);
  }

  return (
    <Container>
      <Item
        onClick={handleRes}
      >
        <Text
          size={20}
          color={COLORS.white}
          weight={700}
        >
          - 
        </Text>
      </Item>
      <Item
        isNumber
      >
        <Text
          size={19} 
          color={COLORS.gray}
          weight={600}
        >
          { number }  
        </Text>
      </Item>
      <Item
        onClick={handleAdd}
      >
        <Text
          size={20}
          color={COLORS.white}
          weight={700}
        >
          +
        </Text>
      </Item>
    </Container>
  )
}

export default Control;
