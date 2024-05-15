import { useState } from "react";
import { useClient } from "../../../context/client";
import { Container, Section, Navigation, Num, Table, Header, FlexRow, Options } from "./styles";
import { COLORS, FlexColumn, Text } from "../../../styles";
import { FaChevronRight } from "react-icons/fa";
import Item from "./Item";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [step, setStep] = useState(1);
  const [shipType, setShipType] = useState("normal");
  const { cartItems, emptyCart } = useClient();
  const navigate = useNavigate();

  const subTotal = cartItems.reduce((acc, cur) => acc + cur.subTotal, 0);

  return (
    cartItems.length <= 0
    ? <Container
        height="calc(100vh - 200px)"
        align="center"
        justify="center"
      >
        <FlexColumn 
          align="center"
          gap={2}
        >
          <Text
            weight={800}
            size={30}
          >
            Sin productos en el carrito
          </Text>
          <Button onClick={() => navigate("/tienda")}>
            Ir a la tienda
          </Button>
        </FlexColumn>
      </Container>
    : <>
        <Navigation>
          <FlexRow
            style={{cursor: "pointer"}}
            onClick={() => setStep(1)}
            isActive={step === 1}  
          >
            <Num isActive={step === 1}>
              <Text
                size={18}
                color="white"
                weight={700}
              >
                1
              </Text>
            </Num>
            <Text
              size={22}
              weight={800}
              color={step === 1 ? COLORS.gray : COLORS.taupe}
              hColor={COLORS.gray}
            >
              CARRITO
            </Text>
          </FlexRow>
          <FaChevronRight
            className="handler"
            size={20}
            color={COLORS.taupe}
          />
          <FlexRow 
            style={{cursor: "pointer"}}
            onClick={() => setStep(2)}
            isActive={step === 2}      
          >
            <Num isActive={step === 2}>
              <Text
                size={18}
                color="white"
                weight={700}
              >
                2
              </Text>
            </Num>
            <Text
              size={22}
              weight={800}
              color={step === 2 ? COLORS.gray : COLORS.taupe}
              hColor={COLORS.gray}
            >
              DETALLES DE PAGO
            </Text>
          </FlexRow>
          <FaChevronRight
            className="handler"
            size={20}
            color={COLORS.taupe}
          />
          <FlexRow 
            style={{cursor: "pointer"}}
            isActive={step === 3}
          >
            <Num isActive={step === 3}>
              <Text
                size={18}
                color="white"
                weight={700}
              >
                3
              </Text>
            </Num>
            <Text
              size={22}
              weight={800}
              color={step === 3 ? COLORS.gray : COLORS.taupe}
              hColor={COLORS.gray}
            >
              PEDIDO COMPLETADO
            </Text>
          </FlexRow>
        </Navigation>
        <Container>
          <Section
            width={60}
          >
            {
              step === 1
              ? <>
                  <Table>
                    <thead>
                      <tr>
                        <td>
                          <Text
                            align="start"
                            weight={800}
                            color={COLORS.taupe}
                          >
                            PRODUCTO
                          </Text>
                        </td>
                        <td>
                          <Text
                            weight={800}
                            color={COLORS.taupe}
                          >
                            PRECIO
                          </Text>
                        </td>
                        <td>
                          <Text
                            weight={800}
                            color={COLORS.taupe}
                          >
                            CANTIDAD
                          </Text>
                        </td>
                        <td>
                          <Text
                            weight={800}
                            color={COLORS.taupe}
                          >
                            SUBTOTAL
                          </Text>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <Item
                            key={index}
                            item={item}
                          />
                        ))
                      }
                    </tbody>
                  </Table>
                  <FlexRow gap={1}>
                    <Button onClick={() => navigate("/tienda")}>
                      Seguir comprando
                    </Button>
                    <Button
                      onClick={emptyCart}
                      color="secondary"
                    >
                      Vaciar carrito
                    </Button>
                  </FlexRow>
                </>
              : <>
              
                </>
            }
          </Section>
          <Section
            gap={0.6}
            width={40}
            align="center"
          >
            {
              step === 1
              ? <>
                  <Header>
                    <Text
                      align="start"
                      weight={800}
                      color={COLORS.taupe}
                    >
                      TOTAL DE PRODUCTOS
                    </Text>
                  </Header>
                  <Header>
                    <Text
                      align="start"
                      weight={800}
                      color={COLORS.taupe}
                    >
                      SUBTOTAL
                    </Text>
                    <Text
                      align="start"
                      weight={700}
                    >
                      S/. {subTotal.toFixed(2)}
                    </Text>
                  </Header>
                  <Header withoutBorder>
                    <Text
                      align="start"
                      weight={800}
                      color={COLORS.taupe}
                    >
                      ENVÍO
                    </Text>
                  </Header>
                  <Options>
                    <Header withoutBorder>
                      <FlexRow
                        isActive={step === 1}
                        onClick={() => setShipType("normal")}
                      >
                        <input type="radio" readOnly id="normal" name="options" checked={shipType === "normal"} />
                        <label htmlFor="normal">
                          <Text
                            align="start"
                            weight={700}
                          >
                            Envío normal (1 a 3 días habiles)
                          </Text>
                        </label>
                      </FlexRow>
                      <Text
                        align="start"
                        weight={700}
                      >
                        S/. 9.00
                      </Text>
                    </Header>
                    <Header 
                      withoutBorder
                      style={{marginTop: "-0.7rem"}}
                    >
                      <FlexRow
                        isActive={step === 1}
                        onClick={() => setShipType("express")}
                      >
                        <input type="radio" readOnly id="express" name="options" checked={shipType === "express"} />
                        <label htmlFor="express">
                          <Text
                            align="start"
                            weight={700}
                          >
                            Envío express (1 día)
                          </Text>
                        </label>
                      </FlexRow>
                      <Text
                        align="start"
                        weight={700}
                      >
                        S/. 15.00
                      </Text>
                    </Header>
                  </Options>
                  <Header>
                    <Text
                      align="start"
                      weight={800}
                      color={COLORS.taupe}
                    >
                      TOTAL
                    </Text>
                    <Text
                      align="start"
                      color={COLORS.orange}
                      weight={700}
                    >
                      S/. {(subTotal + (shipType === "normal" ? 9 : 15)).toFixed(2)}
                    </Text>
                  </Header>
                  <Button
                    size="full"
                    onClick={() => setStep(2)}
                  >
                    Finalizar compra
                  </Button>
                </>
              : <>
              
                </>
            }
          </Section>
        </Container>
      </>
  );
}

export default Cart;
