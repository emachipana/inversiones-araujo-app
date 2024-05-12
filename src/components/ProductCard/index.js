import { useNavigate } from "react-router-dom";
import { COLORS, Text } from "../../styles";
import Button from "../Button";
import { Container, Description, Image, Name } from "./styles";
import { TiShoppingCart } from "react-icons/ti";
import { useClient } from "../../context/client";

function ProductCard({ id, img, name, category_id, price, isInAdmin }) {
  const { categories } = useClient();
  const navigate = useNavigate();

  const category = categories.find((category) => category.id === category_id);

  const handleClick = () => {
    window.scrollTo(0, 0);
    if(isInAdmin) return navigate(`/admin/productos/${id}`);

    navigate(`/tienda/producto/${id}`);
  }

  const url = img[0] ? img[0]?.image_url : "/img/default_product.png";

  return (
    <Container
      onClick={handleClick}
    >
      <Image 
        alt={`${name}-image`}
        src={url}
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
          iconSize={18}
        >
          Agregar al carrito
        </Button>
      </Description>
    </Container>
  );
}

export default ProductCard;
