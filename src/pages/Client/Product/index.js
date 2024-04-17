import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../../../components/Categories";
import { Container } from "../Store/styles";
import { useData } from "../../../context/data";
import { Content, Description, Image, ImageContainer, Info, Products, Section } from "./styles";
import { Title } from "../styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import Button from "../../../components/Button";
import { TiShoppingCart } from "react-icons/ti";
import Control from "../../../components/Control";
import ProductCard from "../../../components/ProductCard";

function Product() {
  const [number, setNumber] = useState(1);
  const [relProducts, setRelProducts] = useState([]);
  const { products, categories, isLoading, getTrendProducts } = useData();
  const { id } = useParams();

  const product = 
    (!products.data || products.data.length <= 0)
    ? undefined
    : products.data.find((product) => product.id === (id * 1));

  const category = !product ? "todo" : categories.find((category) => category.id === product.category_id);

  useEffect(() => {
    const products = getTrendProducts(4);

    setRelProducts(products)
  }, [getTrendProducts]); 


  return (
    <Container>
      <Categories 
        category={category?.name}
      />
      <Section>
        {
          isLoading
          ? "Cargando..."
          : (!product
            ? <Title>El producto no esta disponible</Title>
            : <>
                <Description>
                  <ImageContainer>
                    <FaChevronLeft 
                      className="handle"
                      style={{left: "10px"}}
                    />
                    <Image 
                      alt="product-image"
                      src={product.images[0].image_url}
                    />
                    <FaChevronRight 
                      className="handle"
                      style={{right: "10px"}}
                    />
                  </ImageContainer>
                  <Info>
                    <Content>
                      <Text
                        size={14}
                        color={COLORS.taupe}
                        weight={700}
                      >
                        TIENDA / { category?.name.toUpperCase() }
                      </Text>
                      <Title
                        align="start"
                        size={1.45}
                      >
                        { product.name }
                      </Title>
                      <Text
                        size={17}
                        color={COLORS.orange}
                        weight={700}
                      >
                        S/. { product.price }
                      </Text>
                      <Text
                        align="start"
                        size={17}
                        color={COLORS.taupe}
                      >
                        { product.description }
                      </Text>
                    </Content>
                    <FlexColumn
                      gap={1}
                    >
                      <Text
                        weight={700}
                        size={17}
                      >
                        { product.stock } disponibles
                      </Text>
                      <FlexRow
                        gap={2}
                      >
                        <Control 
                          number={number}
                          setNumber={setNumber}
                          stock={product.stock}
                        />
                        <Button
                          Icon={TiShoppingCart}
                        >
                          Agregar al carrito
                        </Button>
                      </FlexRow>
                    </FlexColumn>
                  </Info>
                </Description>
                <FlexColumn
                  style={{alignSelf: "flex-start", width: "100%", padding: "1rem"}}
                  gap={2}
                >
                  <Text
                    size={24}
                    weight={800}
                  >
                    Productos relacionados
                  </Text>
                  <Products>
                    {
                      relProducts.map((product, index) => (
                        <ProductCard 
                          key={index}
                          category_id={product.category_id}
                          id={product.id}
                          img={product.images[0].image_url}
                          name={product.name}
                          price={product.price}
                        />
                      ))
                    }
                  </Products>
                </FlexColumn>
              </>
            )
        }
      </Section>
    </Container>
  );
}

export default Product;
