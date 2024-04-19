import { Text } from "../../styles";
import { Container } from "./styles";

function Badge({ status }) {
  return (
    <Container
      status={status}
    >
      <Text
        size={13}
        weight={800}
      >
        { status === "pending" ? "PENDIENTE" : "ENTREGADO" }
      </Text>
    </Container>
  );
}

export default Badge;
