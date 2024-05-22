import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { useAdmin } from "../../../context/admin";
import { capitalize } from "../../../helpers/capitalize";
import { COLORS, FlexColumn, Text } from "../../../styles";
import { Title } from "../styles";
import Card from "./Card";
import { Container, Section, Table } from "./styles";

function Home() {
  const { orders, vitroOrders } = useAdmin();
  const navigate = useNavigate();

  const vitroDelivered = vitroOrders.data?.filter(order => order.status === "delivered").length || 0;
  const vitroPending = vitroOrders.data?.filter(order => order.status === "pending").length || 0;
  const orderDelivered = orders.data?.filter(order => order.status === "delivered").length || 0;
  const orderPending = orders.data?.filter(order => order.status === "pending").length || 0;
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  }

  return (
    <>
      <Title>Inicio</Title>
      <Section>
        <Container>
          <FlexColumn gap={0}>
            <Text
              color={COLORS.persian}
              size={20}
              weight={700}
              style={{lineHeight: "6px"}}
            >
              Plántulas in vitro
            </Text>
            <Text
              size={15}
              color={COLORS.taupe}
            >
              Pedidos
            </Text>
          </FlexColumn>
          <Table>
            <thead>
              <tr>
                <th>
                  <Text
                    align="start"
                    weight={700}
                    color={COLORS.dim}
                  >
                    Nombre
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Destino
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Variedades
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Cantidad
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Total
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Entrega
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                vitroOrders.data?.slice(0, 5).map((order, index) => {
                  const init = new Date(order.init_date);
                  const fin = new Date(order.finish_date);
                  const quantity = order.varieties.reduce((acc, cur) => acc + cur.quantity, 0);

                  return (
                    <tr
                      key={index}
                    >
                      <td>
                        <FlexColumn gap={0}>
                          <Text
                            weight={700}
                            align="start"
                          >
                            { capitalize(order.first_name) }
                          </Text>
                          <Text
                            size={14}
                            color={COLORS.taupe}
                            style={{marginTop: "-0.5rem"}}
                          >
                            Inicio: { init.toLocaleDateString("es-ES", options) }
                          </Text>
                        </FlexColumn>
                      </td>
                      <td>
                        <Text
                          weight={700}
                        >
                          { order.destination }
                        </Text>
                      </td>
                      <td style={{maxWidth: "110px"}}>
                        <Text
                          style={{whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}
                          weight={700}
                        >
                          { order.varieties.map(variety => capitalize(variety.variety_name)).join(", ") }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                          color={COLORS.orange}
                        >
                          { quantity }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                          color={COLORS.persian}
                        >
                          S/. { order.total.toFixed(2) }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                        >
                          { fin.toLocaleDateString("es-ES", options) }
                        </Text>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <Button
            color="secondary"
            style={{alignSelf: "center" }}
            onClick={() => navigate("/admin/invitro")}
          >
            Ver todos
          </Button>
        </Container>
        <FlexColumn gap={1}>
          <Card 
            color="primary"
            num={vitroDelivered}
          />
          <Card
            color="secondary"
            num={vitroPending}
          />
        </FlexColumn>
      </Section>
      <Section reverse>
        <FlexColumn gap={1}>
          <Card 
            color="primary"
            num={orderDelivered}
          />
          <Card 
            color="secondary"
            num={orderPending}
          />
        </FlexColumn>
        <Container>
          <FlexColumn gap={0}>
            <Text
              color={COLORS.persian}
              size={20}
              weight={700}
              style={{lineHeight: "6px"}}
            >
              Productos
            </Text>
            <Text
              size={15}
              color={COLORS.taupe}
            >
              Pedidos
            </Text>
          </FlexColumn>
          <Table>
            <thead>
              <tr>
                <th>
                  <Text
                    align="start"
                    weight={700}
                    color={COLORS.dim}
                  >
                    Nombre
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Destino
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Envío
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Productos
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Total
                  </Text>
                </th>
                <th>
                  <Text
                    weight={700}
                    color={COLORS.dim}
                  >
                    Pago
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                orders.data?.slice(0, 5).map((order, index) => {
                  const created = new Date(order.created_at);

                  return (
                    <tr
                      key={index}
                    >
                      <td>
                        <FlexColumn gap={0}>
                          <Text
                            weight={700}
                            align="start"
                          >
                            { capitalize(order.client.first_name) }
                          </Text>
                          <Text
                            size={14}
                            color={COLORS.taupe}
                            style={{marginTop: "-0.5rem"}}
                          >
                            Creación: { created.toLocaleDateString("es-ES", options) }
                          </Text>
                        </FlexColumn>
                      </td>
                      <td>
                        <Text
                          weight={700}
                        >
                          { order.destination }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                          color={COLORS.orange}
                        >
                          { capitalize(order.shipping_type) }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                          
                        >
                          { order.order_products.length }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                          color={COLORS.persian}
                        >
                          S/. { order.total.toFixed(2) }
                        </Text>
                      </td>
                      <td>
                        <Text
                          weight={700}
                        >
                          { capitalize(order.pay_type) }
                        </Text>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <Button
            color="secondary"
            style={{alignSelf: "center" }}
            onClick={() => navigate("/admin/pedidos")}
          >
            Ver todos
          </Button>
        </Container>
      </Section>
    </>
  );
}

export default Home;
