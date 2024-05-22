import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Input from "../Input";
import { Container, Img, Product, Section } from "./styles"
import apiFetch from "../../services/apiFetch";
import { COLORS, FlexColumn, Text } from "../../styles";
import { useNavigate } from "react-router-dom";

function Search({ placeholder, backgroundColor, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [param, setParam] = useState("");
  const [result, setResult] = useState([]);
  const [data, setData] = useState({section: false, isOpen: false});
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const param = e.target.value; 
    setParam(param);
    if(param.length >= 3) {
      setData({...data, isOpen: true});
      setIsLoading(true);
      const result = await apiFetch(`products?search=${param}`);
      setResult(result.data);
      setIsLoading(false);
      return;
    }

    if(param.length <= 0) {
      setData({section: false, isOpen: false});
      setResult([]);
    }
  }

  const handleBlur = () => {
    if(data.section) return;

    setParam("");
    setData({section: false, isOpen: false});
    setResult([]);
  }

  const handleClick = (id) => {
    window.scrollTo(0, 0);
    setParam("");
    setData({section: false, isOpen: false});
    setResult([]);
    navigate(`/tienda/producto/${id}`);
  }

  return (
    <Container
      {...props}
    >
      <Input
        backgroundColor={backgroundColor}
        id="search"
        Icon={IoSearchOutline}
        handleChange={handleChange}
        placeholder={placeholder || "Buscar productos"}
        value={param}
        handleBlur={handleBlur}
      />
      {
        data.isOpen
        &&
        <Section
          justify={isLoading ? "center" : result.length <= 0 ? "center" : ""}
          onMouseEnter={() => setData({...data, section: true})}
        >
          {
            isLoading
            ? "Cargando..."
            : (
              result.length > 0
              ? result.map((item, index) => (
                  <Product 
                    key={index}
                    onClick={() => handleClick(item.id)}
                  >
                    <Img 
                      alt={item.name}
                      src={item.images[0] ? item.images[0]?.image_url : "/img/default_product.png"}
                    />
                    <FlexColumn
                      gap={0.2}
                    >
                      <Text
                        align="start"
                        size={17}
                        weight={700}
                      >
                        {item.name}
                      </Text>
                      <Text
                        align="start"
                        color={COLORS.persian}
                        weight={600}
                      >
                        {
                          item.discount
                          ? <>
                              S/.{item.discount.price}     
                              <span 
                                style={{textDecoration: "line-through", color: COLORS.taupe, marginLeft: "10px"}}
                              >
                                S/.{item.price}
                              </span>
                            </>
                          : `S/.${item.price}`
                        }
                      </Text>
                    </FlexColumn>
                  </Product>
                ))
              : <Text
                  size={20}
                  weight={700}
                >
                  Ningún producto encontrado
                </Text>
            )
          }
        </Section>
      }
    </Container>
  );
}

export default Search;
