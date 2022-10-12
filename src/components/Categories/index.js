/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { get } from "../../services";
import CategoryCard from "./CategoryCard";
import { Container, Header, Icon, Section, Text, Title } from "./styles";
import { BiFilterAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function Categories({ setParent, backup }) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("Todas");

  useEffect(() => {
    async function fetch() {
      const response = await get("categories");
      setCategories(response);
    }

    fetch();
  }, []);
  
  return (
    <Container
      isOpen={isOpen}
    >
      <Header
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          isOpen
          ?
          <IoClose
            size="23px"
            css={Icon}
          />
          :
          <BiFilterAlt
            css={Icon}
          /> 
        }
        <Text>Filtrar</Text>
        <Title> 
          Filtrar por ({ filter })
        </Title>
      </Header>
      <Section>
        <CategoryCard
          setOpen={setIsOpen}
          setFilter={setFilter}
          setParent={setParent}
          backup={backup}
          name="Todas"
        />
        {
          categories.map(category => (
            <CategoryCard
              setOpen={setIsOpen}
              setFilter={setFilter}
              backup={backup}
              setParent={setParent}
              key={category.id}
              name={category.name}
              subCategories={category.sub_categories}
            />
          ))
        }
      </Section>
    </Container>
  );
}

export default Categories;
