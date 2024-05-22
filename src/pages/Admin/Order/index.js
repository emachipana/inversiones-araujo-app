import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../../context/admin";
import apiFetch from "../../../services/apiFetch";
import { Title } from "../styles";
import { capitalize } from "../../../helpers/capitalize";
import { Container, FlexRow, Section } from "../Product/styles";
import { COLORS, FlexColumn, FlexRow as Row, Text } from "../../../styles";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import { FaTrashAlt } from "react-icons/fa";
import { Image } from "./styles";
import Modal from "../../../components/Modal";
import { ModalSection } from "../Messages/styles";

function Order() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [order, setOrder] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, setIsLoading, setOrders } = useAdmin();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const order = await apiFetch(`orders/${id}`);
        setOrder(order.data);
        setIsLoading(false);
      }catch(e) {
        console.error(e);
        setIsLoading(false);
      }
    }

    fetch();
  }, [ id, setIsLoading ]);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await apiFetch(`orders/${order.id}`, { method: "DELETE" });
      const orders = await apiFetch("orders");
      setOrders(orders);
      navigate("/admin/pedidos");
      setIsLoading(false);
    }catch(e) {
      console.error(e.message);
      setIsLoading(false);
    }
  }

  const created_at = new Date(order?.created_at);
  const limit_date = new Date(order?.created_at);
  limit_date.setDate(created_at.getDate() + (order?.shipping_type === "normal" ? 1 : 3));

  return (
    isLoading
    ? "Cargando..."
    : (
        !order
        ? <Title>El pedido no esta disponible</Title>
        : <>
            <Title>{ capitalize(order.client.first_name + " " + order.client.last_name) }</Title>
            <Container>
              <Section>
                <FlexRow>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      DNI
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { order.client.document }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Teléfono
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { order.client.phone }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Destino
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { order.destination }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Estado
                    </Text>
                    <Badge status={order.status} />
                  </FlexColumn>
                </FlexRow>
                <FlexRow>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Correo
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { order.client.email }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Total
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      S/. { order.total }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Envío
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { capitalize(order.shipping_type) }
                    </Text>
                  </FlexColumn>
                </FlexRow>
                <FlexRow>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Pago
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { capitalize(order.pay_type) }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Fecha pedido
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { created_at.toLocaleDateString("es-ES", options) }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Plazo máximo
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { limit_date.toLocaleDateString("es-ES", options) }
                    </Text>
                  </FlexColumn>
                </FlexRow>
                <Button
                  style={{alignSelf: "center"}}
                  onClick={() => setDeleteModal(true)}
                  iconSize={17}
                  Icon={FaTrashAlt}
                  color="danger"
                >
                  Eliminar
                </Button>
              </Section>
              <Section>
                <Text
                  weight={800}
                  size={18}
                >
                  Productos
                </Text>
                <FlexColumn
                  style={{width: "100%"}}
                  justify="flex-start"
                >
                  {
                    order.order_products.map((item, index) => (
                      <Row
                        justify="flex-start"
                        width="100%"
                        key={index}
                        style={{borderBottom: `1px solid ${COLORS.platinium}`, padding: "6px 0"}}
                      >
                        <Image 
                          alt={item.product.name}
                          src={item.product.images[0] ? item.product.images[0]?.image_url : "/img/default_product.png"}
                        />
                        <FlexColumn>
                          <Text
                            align="start"
                            weight={700}
                            size={17}
                          >
                            { item.product.name } <span style={{color: COLORS.taupe}}>{ item.quantity } x S/. { item.product.discount ? item.product.discount.price : item.product.price }</span>
                          </Text>
                          <Text
                            color={COLORS.orange}
                            align="start"
                            weight={700}
                            size={17}
                            style={{marginTop: "-0.4rem"}}
                          >
                            S/. { item.sub_total }
                          </Text>
                        </FlexColumn>
                      </Row>
                    ))
                  }
                </FlexColumn>
              </Section>
            </Container>
            <Modal
              padding="1.2rem"
              isActive={deleteModal}
              setIsActive={setDeleteModal}
            >
              <ModalSection>
                <Text
                  size={24}
                  weight={700}
                >
                  ¿Estas seguro de eliminar el pedido?
                </Text>
                <Row
                  gap={2}
                >
                  <Button
                    onClick={handleDelete}
                    color="danger"
                  >
                    Eliminar
                  </Button>
                  <Button
                    onClick={() => setDeleteModal(false)}
                  >
                    Cancelar
                  </Button>
                </Row>
              </ModalSection>
            </Modal>
          </>
      )
  )
}

export default Order;
