import { useState } from "react";
import { useClient } from "../../../context/client";
import { Container, Section, Navigation, Num, Table, Header, FlexRow, Options, Form, FormSection } from "./styles";
import { COLORS, FlexColumn, FlexRow as Row, Text } from "../../../styles";
import { FaChevronRight } from "react-icons/fa";
import Item from "./Item";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { IoCard } from "react-icons/io5";
import { MdCalendarMonth, MdOutlinePassword } from "react-icons/md";

function Cart({ setUserModal }) {
  const [step, setStep] = useState(1);
  const [shipType, setShipType] = useState("normal");
  const [payType, setPayType] = useState("tarjeta");
  const { cartItems, emptyCart } = useClient();
  const navigate = useNavigate();

  const subTotal = cartItems.reduce((acc, cur) => acc + cur.subTotal, 0);
  const total = subTotal + (shipType === "normal" ? 9 : 15);

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
                  <Header>
                    <Row>
                      <Text
                        weight={700}
                      >
                        ¿Ya eres cliente?
                      </Text>
                      <Text
                        color={COLORS.persian}
                        isLink
                        weight={600}
                        onClick={() => setUserModal(true)}
                      >
                        Inicia sesión
                      </Text>
                    </Row>
                  </Header>
                  <Form>
                    <Text
                      size={17}
                      weight={700}
                    >
                      DETALLES DE LA FACTURACION
                    </Text>
                    <FormSection>
                      <Input 
                        id="dni"
                        placeholder="DNI"
                      />
                      <Input 
                        id="first_name"
                        placeholder="Nombres"
                      />
                      <Input 
                        id="last_name"
                        placeholder="Apellidos"
                      />
                    </FormSection>
                    <FormSection>
                      <Input 
                        id="address"
                        placeholder="Dirección"
                      />
                      <Input 
                        id="department"
                        placeholder="Departamento"
                      />
                      <Input 
                        id="city"
                        placeholder="Ciudad"
                      />
                    </FormSection>
                    <FormSection>
                      <Input 
                        id="phone"
                        placeholder="Teléfono"
                      />
                      <Input 
                        id="email"
                        placeholder="Correo electrónico"
                      />
                      <Input 
                        id="type"
                        placeholder="Tipo de comprobante"
                      />
                    </FormSection>
                    <Input 
                      id="comment"
                      placeholder="Notas del pedido"
                    />
                    <Row>
                      <input type="checkbox" id="create" />
                      <label htmlFor="create">
                        <Text>
                          ¿Crear cuenta?
                        </Text>
                      </label>
                    </Row>
                  </Form>
                </>
            }
          </Section>
          <Section
            gap={0.6}
            width={40}
            bgColor={step === 2 ? "#F9F9F9" : ""}
            padding="0.4rem 1.5rem"
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
                      S/. {total.toFixed(2)}
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
                  <Header withoutBorder>
                    <Text
                      size={17}
                      weight={700}
                      color={COLORS.persian}
                    >
                      TU PEDIDO
                    </Text>
                  </Header>
                  <Header>
                    <Text
                      weight={700}
                      color={COLORS.taupe}
                    >
                      PRODUCTO
                    </Text>
                    <Text
                      weight={700}
                      color={COLORS.taupe}
                    >
                      SUBTOTAL
                    </Text>
                  </Header>
                  {
                    cartItems.map((item, index) => (
                      <Header 
                        key={index}
                        style={{marginTop: "-0.5rem"}}
                      >
                        <Text
                          align="start"
                          style={{width: "50%"}}
                          weight={600}
                          color={COLORS.dim}
                        >
                          { item.name } x <span style={{color: COLORS.gray}}>{ item.quantity }</span>
                        </Text>
                        <Text
                          weight={700}
                          color={COLORS.orange}
                        >
                          S/. { item.subTotal.toFixed(2) }
                        </Text>
                      </Header>
                    ))
                  }
                  <Header>
                    <Text
                      weight={700}
                      color={COLORS.taupe}
                    >
                      SUBTOTAL
                    </Text>
                    <Text
                      weight={700}
                      color={COLORS.persian}
                    >
                      S/. { subTotal.toFixed(2) }
                    </Text>
                  </Header>
                  <Header>
                    <Text
                      weight={700}
                      color={COLORS.taupe}
                    >
                      ENVÍO
                    </Text>
                    <Text
                      weight={700}
                    >
                      S/. { shipType === "normal" ? "9.00" : "15.00" }
                    </Text>
                  </Header>
                  <Header>
                    <Text
                      weight={700}
                      color={COLORS.taupe}
                    >
                      TOTAL
                    </Text>
                    <Text
                      weight={700}
                      color={COLORS.persian}
                    >
                      S/. { total.toFixed(2) }
                    </Text>
                  </Header>
                  <FlexColumn
                    gap={1}
                    style={{padding: "1rem 0"}}
                  >
                    <Row
                      onClick={() => setPayType("tarjeta")}
                    >
                      <input type="radio" readOnly id="tarjeta" name="pay" checked={payType === "tarjeta"} />
                      <label htmlFor="tarjeta">
                        <Text
                          align="start"
                          weight={700}
                        >
                          Pagar con tarjeta de débito
                        </Text>
                      </label>
                    </Row>
                    {
                      payType === "tarjeta"
                      &&
                      <FlexColumn
                        style={{padding: "0 1rem"}}
                      >
                        <Input
                          Icon={IoCard}
                          id="tarjeta"
                          placeholder="Número de tarjeta"
                        />
                        <Input
                          Icon={MdCalendarMonth}
                          id="vencimiento"
                          placeholder="mm/aa"
                        />
                        <Input
                          Icon={MdOutlinePassword}
                          id="cvv"
                          placeholder="cvv"
                        />
                      </FlexColumn>
                    }
                    <Row
                      onClick={() => setPayType("transferencia")}
                    >
                      <input type="radio" readOnly id="transferencia" name="pay" checked={payType === "transferencia"} />
                      <label htmlFor="transferencia">
                        <Text
                          align="start"
                          weight={700}
                        >
                          Transferencia o depósito por agente
                        </Text>
                      </label>
                    </Row>
                  </FlexColumn>
                  <Button
                    size="full"
                  >
                    Realizar pedido
                  </Button>
                </>
            }
          </Section>
        </Container>
      </>
  );
}

export default Cart;
