import { Title } from "../../pages/Client/styles";
import { Line } from "../Navbar/Menu/styles";
import Item from "./Item";
import { Container, Wrapper } from "./styles";

function Categories({ category }) {
  return (
    <Container>
      <Wrapper>
        <Title size={1.2}>CATEGORÍAS</Title>
        <Line
          width={45}
          style={{position: "relative"}}
          />
      </Wrapper>
      <Item
        category="Todo"
        isActive={category === "todo"}
        num={69}
        redirectTo="todo"
      />
      <Item 
        category="Campo"
        isActive={category === "campo"}
        num={12}
        redirectTo="campo"
        withIcon
      />
      <Item 
        category="Laboratorio"
        isActive={category === "laboratorio"}
        num={18}
        redirectTo="laboratorio"
        withIcon
      />
      <Item 
        category="Invernadero"
        isActive={category === "invernadero"}
        num={30}
        redirectTo="invernadero"
        withIcon
      />
      <Item 
        category="Riego tecnificado"
        isActive={category === "riego"}
        num={30}
        redirectTo="riego"
        withIcon
      />
      <Wrapper>
        <Title size={1.2}>POR PRECIO</Title>
        <Line 
          width={50}
          style={{position: "relative"}}
          />
      </Wrapper>
    </Container>
  )
}

export default Categories;
