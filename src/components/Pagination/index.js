/** @jsxImportSource @emotion/react */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Text } from "../../styles";
import { Container, Item, TextManager } from "./styles";

function Pagination({ currentPage, lastPage, links, pageLinks, onClick }) {
  const { prev, next } = links;
  const items = [];

  for(let i = 1; i <= lastPage; i++) {
    items.push({ 
      page: i,
      link: pageLinks.find(link => (link.label * 1) === i)?.url
    });
  }

  const handleClick = (link) => {
    if(!link) return;
    const page = link.split("=")[1];
    if((page * 1) === currentPage) return;

    window.scrollTo(0, 0);
    onClick(link);
  }

  const toRender = items.length > 5 ? items.slice(0, 3) : items;
  const lasItem = items.length > 5 ? items[items.length - 1] : {};

  return (
    <Container>
      <Item
        onClick={() => handleClick(prev)}
      >
        <FaChevronLeft 
        />
        <Text
          weight={700}
          css={TextManager}
        >
          Anterior
        </Text>
      </Item>
        {
          toRender.map((item, index) => (
            <Item
              key={index}
              isActive={currentPage === item.page}
              onClick={() => handleClick(item.link)}
            >
              <Text
                weight={700}
              >
                { item.page }
              </Text>
            </Item>
          ))
        }
        {
          items.length > 5 &&
          <>
            <Item>
              <Text
                weight={700}
              >
                ...
              </Text>
            </Item>
            <Item
              isActive={currentPage === lasItem.page}
              onClick={() => handleClick(lasItem.link)}
            >
              <Text
                weight={700}
              >
                { lasItem.page }
              </Text>
            </Item>
          </>
        }
      <Item
        onClick={() => handleClick(next)}
      >
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
