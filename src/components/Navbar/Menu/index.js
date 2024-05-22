import { useClient } from "../../../context/client";
import { capitalize } from "../../../helpers/capitalize";
import { Container, Item, Line } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const { categories } = useClient();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.split("/")[2] || "todo";

  const handleClick = (to) => {
    window.scrollTo(0, 0);
    navigate(to);
  }

  return (
    <Container>
      <Item 
        onClick={() => handleClick("/tienda")}
        isActive={category === "todo"}
      >
        Todo
        <Line width={10} />
      </Item>
      {
        categories.map((item, index) => (
          <Item
            key={index}
            isActive={category === item.name}
            onClick={() => handleClick(`/tienda/${item.name}`)}
          >
            {capitalize(item.name)}
            <Line width={(item.name.length + 1) * 2} />
          </Item>
        ))
      }
    </Container>
  )
}

export default Menu;
