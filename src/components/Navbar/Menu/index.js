import { useClient } from "../../../context/client";
import { Container, Item, Line } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const { categories } = useClient();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const query = search.split("=")[1];

  return (
    <Container>
      <Item 
        onClick={() => navigate("/tienda")}
        isActive={pathname === "/tienda" && !query}
      >
        Todo
        <Line width={10} />
      </Item>
      {
        categories.map((category, index) => (
          <Item
            key={index}
            isActive={query === category.name}
            onClick={() => navigate(`/tienda?category=${category.name}`)}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            <Line width={(category.name.length + 1) * 2} />
          </Item>
        ))
      }
    </Container>
  )
}

export default Menu;
