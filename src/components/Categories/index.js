import { useState } from "react";
import { useClient } from "../../context/client";
import { Title } from "../../pages/Client/styles";
import { Line } from "../Navbar/Menu/styles";
import Item from "./Item";
import { Container, Wrapper } from "./styles";

function Categories({ category }) {
  const { categories, productBackup } = useClient();
  const data = categories.map(item => ({ [`${item.name}`]: false }));
  const [openData, setOpenData] = useState(data);

  const handleClick = (category) => setOpenData({ ...data, [category]: !openData[category] });

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
        category="todo"
        isActive={category === "todo"}
        num={productBackup.meta?.total || 0}
      />
      {
        categories.map((item, index) => (
          <Item 
            key={index}
            category={item.name}
            isActive={category === item.name}
            subCategories={item.sub_categories}
            num={item.products}
            withIcon
            onClick={handleClick}
            isOpen={openData[item.name]}
          />
        ))
      }
    </Container>
  )
}

export default Categories;
