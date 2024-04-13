import { Container, Item, Line } from "./styles";
import { useLocation } from "react-router-dom";

function Menu({ redirect }) {
  const { pathname, search } = useLocation();
  const query = search.split("=")[1];

  return (
    <Container>
      <Item 
        onClick={() => redirect("/tienda")}
        isActive={pathname === "/tienda" && !query}
      >
        Todo
        <Line width={10} />
      </Item>
      <Item 
        onClick={() => redirect("/tienda?category=campo")}
        isActive={query === "campo"}
      >
        Campo
        <Line width={16} />
      </Item>
      <Item
        onClick={() => redirect("/tienda?category=laboratorio")}
        isActive={query === "laboratorio"}
      >
        Laboratorio
        <Line width={25} />
      </Item>
      <Item
        onClick={() => redirect("/tienda?category=invernadero")}
        isActive={query === "invernadero"}
      >
        Invernadero
        <Line width={32} />
      </Item>
      <Item
        onClick={() => redirect("/tienda?category=riego")}
        isActive={query === "riego"}
      >
        Riego tecnificado
        <Line />
      </Item>
    </Container>
  )
}

export default Menu;
