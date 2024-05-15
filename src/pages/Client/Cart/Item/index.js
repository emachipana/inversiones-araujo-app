import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { COLORS, FlexRow, Text } from "../../../../styles";
import { Img } from "./styles";
import Control from "../../../../components/Control";
import { useClient } from "../../../../context/client";

function Item({ item }) {
  const { deleteCartProduct, updateCartProduct } = useClient();
  const [ counter, setCounter ] = useState(1);

  useEffect(() => {
    setCounter(item.quantity);
  }, [ item ])

  return (
    <tr>
      <td style={{maxWidth: "200px"}}>
        <FlexRow 
          justify="flex-start"
          gap={0.2}
        >
          <FaTrashAlt 
            size={20}
            color={COLORS.taupe}
            style={{cursor: "pointer", minWidth: "20px"}}
            onClick={() => deleteCartProduct(item)}
          />
          <Img
            alt={item.name}
            src={item.images[0] ? item.images[0]?.image_url : "/img/default_product.png"}
          />
          <Text
            weight={700}
            align="start"
          >
            { item.name }
          </Text>
        </FlexRow>
      </td>
      <td>
        <Text
          size={17}
          color={COLORS.orange}
          weight={700}
        >
          S/.{item.price}
        </Text>
      </td>
      <td>
        <FlexRow>
          <Control
            number={counter}
            setNumber={setCounter}
            stock={item.stock}
            onClick={(num) => updateCartProduct(item, num)}
          />
        </FlexRow>
      </td>
      <td>
        <Text
          size={17}
          color={COLORS.orange}
          weight={700}
        >
          S/.{item.subTotal.toFixed(1)}
        </Text>
      </td>
    </tr>
  )
}

export default Item;
