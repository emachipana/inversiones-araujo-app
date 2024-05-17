import { COLORS, FlexColumn, Text } from "../../../styles";
import { Card as Container } from "./styles";

function Card({ color, num }) {
  return (
    <Container
      bgColor={color === "primary" ? COLORS.persian : COLORS.red}
    >
      <FlexColumn align="center">
        <Text
          size={28}
          weight={800}
        >
          { color === "primary" ? "Entregado" : "Pendiente" }
        </Text>
        <Text
          weight={600}
          style={{marginTop: "-0.6rem"}}
        >
          { color === "primary" ? "Pedidos entregados" : "Pedidos por entregar" }
        </Text>
      </FlexColumn>
      <Text
        size={40}
        weight={800}
      >
        { num }
      </Text>
    </Container>
  )
}

export default Card;
