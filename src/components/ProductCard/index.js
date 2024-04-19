import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data";
import { COLORS, Text } from "../../styles";
import Button from "../Button";
import { Container, Description, Image, Name } from "./styles";
import { TiShoppingCart } from "react-icons/ti";

function ProductCard({ id, img, name, category_id, price, isInAdmin }) {
  const { categories } = useData();
  const navigate = useNavigate();

  const category = categories.find((category) => category.id === category_id);

  const handleClick = () => {
    if(isInAdmin) return navigate(`/admin/productos/${id}`);

    navigate(`/tienda/producto/${id}`);
  }

  return (
    <Container
      onClick={handleClick}
    >
      <Image 
        alt={`${name}-image`}
        src={img}
      />
      <Description>
        <Text 
          size={14}
          color={COLORS.taupe}
          weight={600}
        >
          { category?.name.toUpperCase() }
        </Text>
        <Name>
          { name }
        </Name>
        <Text
          color={COLORS.persian}
          weight={700}
        >
          S/. { price }
        </Text>
        <Button
          color="secondary"
          style={{alignSelf: "center", marginTop: "9px"}}
          fontSize={16}
          size="full"
          Icon={TiShoppingCart}
        >
          Agregar al carrito
        </Button>
      </Description>
    </Container>
  );
}

export default ProductCard;
