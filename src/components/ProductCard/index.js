import { useNavigate } from "react-router-dom";
import { COLORS, Text } from "../../styles";
import Button from "../Button";
import { Container, Description, Image, Name } from "./styles";
import { TiShoppingCart } from "react-icons/ti";
import { useClient } from "../../context/client";
import { FaCheck } from "react-icons/fa6";

function ProductCard({ product, isInAdmin }) {
  const { id, images, name, category_id, price } = product;
  const { categories, addCartProduct, cartItems } = useClient();
  const navigate = useNavigate();

  const category = categories.find((category) => category.id === category_id);
  const foundProduct = cartItems.find(item => item.id === id);

  const handleClick = () => {
    window.scrollTo(0, 0);
    if(isInAdmin) return navigate(`/admin/productos/${id}`);

    navigate(`/tienda/${category.name}/${id}`);
  }

  const handleCartButtonClick = (e) => {
    e.stopPropagation();
    if(foundProduct) return;

    addCartProduct(product, 1);
  }

  return (
    <Container
      onClick={handleClick}
    >
      <Image 
        alt={`${name}-image`}
        src={images[0] ? images[0]?.image_url : "/img/default_product.png"}
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
          color={foundProduct ? "primary" : "secondary"}
          style={{alignSelf: "center", marginTop: "9px"}}
          fontSize={16}
          size="full"
          Icon={foundProduct ? FaCheck : TiShoppingCart}
          iconSize={18}
          onClick={handleCartButtonClick}
        >
          {
            foundProduct
            ? "En el carrito"
            : "Agregar al carrito"
          }
        </Button>
      </Description>
    </Container>
  );
}

export default ProductCard;
