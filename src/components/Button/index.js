import { Container } from "./styles";

function Button({ fontSize, block, children, ...other }) {
  return (
    <Container
      {...other}
      fontSize={fontSize}
      block={block}
    >
      { children }
    </Container>
  );
}

export default Button;
