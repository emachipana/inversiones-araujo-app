import { COLORS, FlexColumn, FlexRow, Text } from "../../styles";
import Badge from "../Badge";
import { Container, Header, Section } from "./styles";
import { FaCalendarAlt } from "react-icons/fa";

function OrderCard({ client_name, destination, status, variety, ship_type }) {
  return (
    <Container>
      <Header>
        <Text
          color={COLORS.white}
          weight={800}
          size={17}
        >
          { client_name }
        </Text>
        <FlexRow
          gap={0.3}
        >
          <FaCalendarAlt 
            color={COLORS.white}
            size={15}
          />
          <Text
            color={COLORS.white}
            weight={600}
            size={15}
          >
            19 de abril de 2024
          </Text>
        </FlexRow>
      </Header>
      <Section>
        <FlexColumn
          style={{
            whiteSpace: "nowrap",
            maxWidth: "90px",
            overflow: "hidden"
          }}
        >
          <Text
            color={COLORS.white}
            weight={700}
          >
            Destino
          </Text>
          <Text
            color={COLORS.white}
          >
            { destination }
          </Text>
        </FlexColumn>
        <FlexColumn>
          <Text
            color={COLORS.white}
            weight={700}
          >
            { variety ? "Variedad" : "Envío" }
          </Text>
          <Text
            color={COLORS.white}
          >
            {
              variety || ship_type
            }
          </Text>
        </FlexColumn>
        <FlexColumn>
          <Text
            color={COLORS.white}
            weight={700}
          >
            Estado
          </Text>
          <Badge 
            status={status}
          />
        </FlexColumn>
      </Section>
    </Container>
  )
}

export default OrderCard;
