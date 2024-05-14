import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../../../components/Categories";
import { Container } from "../Store/styles";
import { Content, Description, Image, ImageContainer, Info, Products, Section } from "./styles";
import { Title } from "../styles";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import Button from "../../../components/Button";
import { TiShoppingCart } from "react-icons/ti";
import Control from "../../../components/Control";
import ProductCard from "../../../components/ProductCard";
import apiFetch from "../../../services/apiFetch";
import { useClient } from "../../../context/client";

function Product() {
  const [number, setNumber] = useState(1);
  const [relProducts, setRelProducts] = useState([]);
  const [product, setProduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const { id, category } = useParams();
  const { addCartProduct, cartItems } = useClient();

  useEffect(() => {
    const fetch = async () => {
      try {
        const product = await apiFetch(`products/${id}`);
        const relProducts = await apiFetch(`products?category_id[eq]=${product.data.category_id}`);
        const found = relProducts.data.find(item => item.id === product.data.id);
        if(found) {
          const index = relProducts.data.indexOf(found);
          relProducts.data.splice(index, 1);
        }
        setRelProducts(relProducts.data.slice(0, 4));
        setProduct(product.data);
        setIsLoading(false);
      }catch(e) {
        setIsLoading(false);
        console.error(e);
      }
    }

    fetch();
  }, [ id ]);
  
  const imagesSize = product?.images.length || 0;
  const foundProduct = cartItems.find(item => item.id === product?.id);

  const handleClick = () => {
    if(foundProduct) return;
    
    addCartProduct(product, number);
  }

  return (
    <Container>
      <Categories 
        category={category}
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
                      onClick={() => setImageIndex((imageIndex - 1 + imagesSize) % imagesSize)}
                    />
                    <Image 
                      alt={product.name}
                      src={product.images[imageIndex] ? product.images[imageIndex]?.image_url : "/img/default_product.png"}
                    />
                    <FaChevronRight 
                      className="handle"
                      style={{right: "10px"}}
                      onClick={() => setImageIndex((imageIndex + 1) % imagesSize)}
                    />
                  </ImageContainer>
                  <Info>
                    <Content>
                      <Text
                        size={14}
                        color={COLORS.taupe}
                        weight={700}
                      >
                        TIENDA / { category.toUpperCase() }
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
                        {
                          !foundProduct
                          &&
                          <Control
                            number={number}
                            setNumber={setNumber}
                            stock={product.stock}
                          />
                        }
                        <Button
                          Icon={foundProduct ? FaCheck : TiShoppingCart}
                          onClick={handleClick}
                        >
                          {
                            foundProduct
                            ? "En el carrito"
                            : "Agregar al carrito"
                          }
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
                          product={product}
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
