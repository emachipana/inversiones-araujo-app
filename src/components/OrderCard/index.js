import { useNavigate } from "react-router-dom";
import { capitalize } from "../../helpers/capitalize";
import { COLORS, FlexColumn, FlexRow, Text } from "../../styles";
import Badge from "../Badge";
import { Container, Header, Section } from "./styles";
import { FaCalendarAlt } from "react-icons/fa";

function OrderCard({ id, client_name, destination, status, varieties, ship_type, date }) {
  const navigate = useNavigate();
  const parsedDate = new Date(date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  const handleRedirect = () => navigate(`/admin/${ship_type ? "pedidos" : "invitro"}/${id}`);

  return (
    <Container onClick={handleRedirect}>
      <Header>
        <Text
          color={COLORS.white}
          weight={800}
          size={17}
        >
          { capitalize(client_name) }
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
            { parsedDate.toLocaleDateString("es-ES", options) }
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
        <FlexColumn align="center">
          <Text
            color={COLORS.white}
            weight={700}
          >
            { ship_type ? "Envío" : "Variedades" }
          </Text>
          <Text
            align="center"
            color={COLORS.white}
            style={{maxWidth: "90px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}
          >
            {
              ship_type
              ? capitalize(ship_type)
              : varieties.map(variety => capitalize(variety.variety_name)).join(", ")
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
