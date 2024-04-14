/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { Container, IconStyle, Image, Info, Page, Pagination, Section, Title } from "./styles";
import { Text } from "../../styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Slider({ elements = [] }) {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const size = elements.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((page + 1) % size);
    }, 10000);

    return () => clearInterval(interval);
  }, [size, page]);


  return (
    <Container>
      <Section>
        <Info>
          <Title 
            dangerouslySetInnerHTML={{__html: elements[page].title}} 
          />
          <Text style={{textAlign: "start"}}>
            { elements[page].subtitle }
          </Text>
          {
            elements[page].category === "agroinvitro"
            ?
            <a
              target="_blank"
              href="http://localhost:3000/agroinvitro"
              rel="noreferrer"
            >
              <Button>
                { elements[page].textButton }
              </Button>
            </a>
            :
            <Button
              onClick={() => navigate(`/tienda?category=${elements[page].category}`)}
            >
              { elements[page].textButton }
            </Button>
          }
        </Info>
        <Image 
          alt={elements[page].category}
          src={elements[page].img}
        />
      </Section>
      <BsChevronCompactLeft 
        css={IconStyle}
        style={{left: "1rem"}}
        onClick={() => setPage((page - 1 + size) % size)}
      />
      <BsChevronCompactRight
        css={IconStyle}
        style={{right: "1rem"}}
        onClick={() => setPage((page + 1) % size)}
      />
      <Pagination>
        {
          elements.map((_element, index) => (
            <Page 
              key={index}
              isActive={page === index}
              onClick={() => setPage(index)}
            />
          ))
        }
      </Pagination>
    </Container>
  );
}

export default Slider;
