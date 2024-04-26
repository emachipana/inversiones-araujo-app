/** @jsxImportSource @emotion/react */
import { FaShoppingCart } from "react-icons/fa";
import { COLORS, Text } from "../../styles";
import { Cart, Counter, IconStyle } from "./styles";

function CartButton({ dropDown, counter }) {
  return (
    <Cart>
      <FaShoppingCart
        css={IconStyle}
        color={dropDown ? COLORS.persian : ""}
      />
      <Counter
        color={dropDown ? COLORS.persian : ""}
      >
        <Text
          size={14}
          weight={800}
          color={COLORS.white}
        >
          {counter}
        </Text>
      </Counter>
    </Cart>
  );
}

export default CartButton;
