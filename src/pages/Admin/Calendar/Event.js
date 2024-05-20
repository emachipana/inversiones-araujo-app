import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import { capitalize } from "../../../helpers/capitalize";

function Event({ type, name, date }) {
  const icons = {
    "invitro": PiPottedPlantFill,
    "viaje": FaMapMarkedAlt,
    "cotidiano": FaHouseUser
  }
  const Icon = icons[type];
  const toDate = new Date(date);

  return (
    <FlexRow>
      <Icon
        size={28}
        color={COLORS.persian}
      />
      <FlexColumn gap={0}>
        <Text
          weight={600}
          align="start"
          style={{ whiteSpace: "nowrap", overflow: "hidden", maxWidth: "180px", textOverflow: "ellipsis" }}
        >
          { name }
        </Text>
        <Text
          style={{ marginTop: "-0.6rem" }}
          size={13}
          color={COLORS.taupe}
        >
          { capitalize(toDate.toLocaleDateString("es-ES", { month: "long", day: "numeric" })) }
        </Text>
      </FlexColumn>
    </FlexRow>
  );
}

export default Event;
