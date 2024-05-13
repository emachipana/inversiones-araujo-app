import { FaBasketShopping } from "react-icons/fa6";
import { useClient } from "../../context/client";
import { CartItems, FlexColumn, FlexRow, Img, Product, Products, Section } from "./styles";
import { COLORS, Text, FlexColumn as ProductSection } from "../../styles";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, emptyCart } = useClient();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, cur) => acc + cur.subTotal, 0).toFixed(1);

  return (
    <CartItems>
      {
        cartItems.length === 0
        ?
        <>
          <FaBasketShopping
            size={100}
            color={COLORS.taupe}
          />
          <Text
            size={19}
            weight={700}
            color={COLORS.dim}
          >
            El carrito esta vacío
          </Text>
          <Button
            onClick={() => navigate("/tienda")}
          >
            Ir a la tienda
          </Button>
        </>
        :
        <>
          <Products>
            {
              cartItems.map((item, index) => (
                <div 
                  style={{width: "100%", position: "relative"}}
                  key={index}
                >
                  <Product>
                    <Img
                      alt={item.name}
                      src={item.images[0] ? item.images[0]?.image_url : "/img/default_product.png"}
                    />
                    <ProductSection
                      gap={0.2}
                    >
                      <Text
                        style={{maxWidth: "118px", overflow: "hidden", whiteSpace: "nowrap"}}
                        align="start"
                        weight={700}
                      >
                        {item.name}
                      </Text>
                      <Text
                        color={COLORS.taupe}
                        weight={600}
                      >
                        {item.quantity} X S/.{item.price}
                      </Text>
                    </ProductSection>
                  </Product>
                  <hr />
                </div>
              ))
            }
          </Products>
          <Section>
            <FlexRow>
              <Text
                weight={700}
                size={18}
              >
                Total:
              </Text>
              <Text
                size={17}
                color={COLORS.taupe}
                weight={700}
              >
                S/. {total}
              </Text>
            </FlexRow>
            <FlexColumn>
              <Button
                size="full"
                onClick={() => navigate("/carrito")}
              >
                Finalizar compra
              </Button>
              <Button
                onClick={emptyCart}
                size="full"
                color="secondary"
              >
                Vaciar Carrito
              </Button>
            </FlexColumn>
          </Section>
        </>
      }
    </CartItems>
  );
}

export default Cart;
