import { Container, Item, Line } from "./styles";

function Menu() {
  return (
    <Container>
      <Item>
        Todo
        <Line width={10} />
      </Item>
      <Item>
        Campo
        <Line width={16} />
      </Item>
      <Item>
        Laboratorio
        <Line width={25} />
      </Item>
      <Item>
        Invernadero
        <Line width={32} />
      </Item>
      <Item>
        Riego tecnificado
        <Line />
      </Item>
    </Container>
  )
}

export default Menu;
