import { COLORS } from "../../styles";
import { Container } from "./styles";

function Button({ Icon, color, fontSize, children, ...props }) {
  const colorList = {
    primary: {
      background: COLORS.persian,
      hover: COLORS.persian_hover
    },
    secondary: {
      background: COLORS.gray,
      hover: COLORS.dark
    },
    danger: {
      background: COLORS.red,
      hover: COLORS.red_hover
    },
    warning: {
      background: COLORS.yellow,
      hover: COLORS.yellow_hover
    }
  }

  return (
    <Container 
      {...props}
      color={colorList[color || "primary"]}
    >
      { Icon && <Icon size={(fontSize || 18) + 2}/> }
      { children }
    </Container>
  );
}

export default Button;