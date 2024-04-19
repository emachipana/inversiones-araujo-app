import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../../context/data";
import apiFetch from "../../../services/apiFetch";
import { Title } from "../styles";
import { Container, FlexRow, Image, ImageCard, Section } from "./styles";
import { COLORS, FlexColumn, Text } from "../../../styles";
import Button from "../../../components/Button";
import { BiSolidDiscount } from "react-icons/bi";
import { MdAdd, MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

function Product() {
  const [product, setProduct] = useState(undefined);
  const [category, setCategory] = useState({});
  const { isLoading, setIsLoading, categories, setProducts } = useData();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const product = await apiFetch(`products/${id}`);
        const category = categories.find((category) => category.id === (product.data.category_id * 1));
        setCategory(category);
        setProduct(product.data);
        setIsLoading(false);
      }catch(e) {
        console.error(e);

        setIsLoading(false);
      }
    }

    fetch();
  }, [id, setIsLoading, categories]);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await apiFetch(`products/${product.id}`, { method: "DELETE" });
      const newProducts = await apiFetch("products");
      setProducts(newProducts);
      navigate("/admin/productos");
      setIsLoading(false);
    }catch(e) {
      console.error(e);

      setIsLoading(false);
    }
  }

  return (
    isLoading
    ? "Cargando..."
    : (!product
      ? <Title>El producto no esta disponible</Title>
      : <>
          <Title>{ product.name }</Title>
          <Container>
            <Section>
              <FlexRow>
                <FlexColumn>
                  <Text
                    weight={800}
                    size={17}
                  >
                    Categoría
                  </Text>
                  <Text
                    color={COLORS.taupe}
                    weight={600}
                  >
                    { category?.name }
                  </Text>
                </FlexColumn>
                <FlexColumn>
                  <Text
                    weight={800}
                    size={17}
                  >
                    Precio
                  </Text>
                  <Text
                    color={COLORS.taupe}
                    weight={600}
                  >
                    S/. { product.price }
                  </Text>
                </FlexColumn>
                <FlexColumn>
                  <Text
                    weight={800}
                    size={17}
                  >
                    Cantidad
                  </Text>
                  <Text
                    color={COLORS.taupe}
                    weight={600}
                  >
                    { product.stock }
                  </Text>
                </FlexColumn>
              </FlexRow>
              <FlexColumn style={{width: "100%"}}>
                <Text
                  weight={800}
                  size={17}
                >
                  Descripción
                </Text>
                <Text
                  align="start"
                  color={COLORS.taupe}
                  weight={600}
                >
                  { product.description }
                </Text>
              </FlexColumn>
              <FlexRow>
                <Button
                  Icon={BiSolidDiscount}
                >
                  Nueva oferta
                </Button>
                <Button
                  Icon={MdEdit}
                  color="warning"
                >
                  Editar
                </Button>
                <Button
                  onClick={handleDelete}
                  iconSize={17}
                  Icon={FaTrashAlt}
                  color="danger"
                >
                  Eliminar
                </Button>
              </FlexRow>
            </Section>
            <Section>
              <Text
                weight={800}
                size={17}
              >
                Imagenes
              </Text>
              <FlexRow justify="flex-start">
                <ImageCard>
                  <Image
                    alt="product-image"
                    src={product.images[0]?.image_url}
                  />
                </ImageCard>
                <ImageCard>
                  <MdAdd 
                    size={50}
                    color={COLORS.taupe}
                  />
                </ImageCard>
              </FlexRow>
            </Section>
          </Container>
        </>
      )
  );
}

export default Product;
