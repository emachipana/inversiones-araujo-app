import { Container } from "./styles";

function Button({ fontSize, size, block, children, color, ...other }) {
  return (
    <Container
      {...other}
      fontSize={fontSize}
      block={block}
      color={color}
      size={size}
    >
      { children }
    </Container>
  );
}

export default Button;
