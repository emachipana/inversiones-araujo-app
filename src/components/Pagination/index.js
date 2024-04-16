/** @jsxImportSource @emotion/react */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Text } from "../../styles";
import { Container, Item, TextManager } from "./styles";

function Pagination({ currentPage, pages, nextLink, prevLink }) {
  console.log(pages, nextLink, prevLink);

  return (
    <Container>
      <Item>
        <FaChevronLeft 
        />
        <Text
          weight={700}
          css={TextManager}
        >
          Anterior
        </Text>
      </Item>
      <Item
        isActive={currentPage === 1}
      >
        <Text
          weight={700}
        >
          1
        </Text>
      </Item>
      <Item
        isActive={currentPage === 2}
      >
        <Text
          weight={700}
        >
          2
        </Text>
      </Item>
      <Item
        isActive={currentPage === 3}
      >
        <Text
          weight={700}
        >
          3
        </Text>
      </Item>
      <Item>
        <Text
          weight={700}
        >
          ...
        </Text>
      </Item>
      <Item
        isActive={currentPage === 6}
      >
        <Text
          weight={700}
        >
          6
        </Text>
      </Item>
      <Item>
        <Text
          weight={700}
          css={TextManager}
        >
          Siguiente
        </Text>
        <FaChevronRight />
      </Item>
    </Container>
  );
}

export default Pagination;
