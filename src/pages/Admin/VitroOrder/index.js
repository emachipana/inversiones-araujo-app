import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../../../context/admin";
import apiFetch from "../../../services/apiFetch";
import { Title } from "../styles";
import { capitalize } from "../../../helpers/capitalize";
import { Container, FlexRow, Section } from "../Product/styles";
import { COLORS, FlexColumn, Text, FlexRow as Row } from "../../../styles";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillWalletFill } from "react-icons/bs";
import Modal from "../../../components/Modal";
import { ModalSection } from "../Messages/styles";
import { Formik } from "formik";
import { Form } from "../Products/styles";
import Input from "../../../components/Input";
import { validate } from "./validate";

function VitroOrder() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [order, setOrder] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, setIsLoading, setVitroOrders } = useAdmin();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const order = await apiFetch(`vitro_orders/${id}`);
        setOrder(order.data);
        setIsLoading(false);
      }catch(e) {
        console.error(e);
        setIsLoading(false);
      }
    };

    fetch();
  }, [ id, setIsLoading ]);

  const initialValues = {
    phone: order?.phone,
    destination: order?.destination,
    advance: order?.advance
  }

  const quantity = order?.varieties.reduce((acc, cur) => cur.quantity + acc, 0);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await apiFetch(`vitro_orders/${order.id}`, { method: "DELETE" });
      const newOrders = await apiFetch("vitro_orders");
      setVitroOrders(newOrders);
      navigate("/admin/invitro");
      setIsLoading(false);
    }catch(e) {
      console.error(e);
      setIsLoading(false);
    }
  }

  const handleUpdate = async (values) => {
    try {
      setIsLoading(true);
      const newOrder = await apiFetch(`vitro_orders/${order.id}`, { body: values, method: "PATCH" });
      setOrder(newOrder.data);
      const orders = await apiFetch("vitro_orders");
      setVitroOrders(orders);
      setIsLoading(false);
      setEditModal(false);
    }catch(e) {
      console.error(e);
      setIsLoading(false);
    }
  }

  return (
    isLoading
    ? "Cargando..."
    : (
        !order
        ? <Title>El pedido no esta disponible</Title>
        : <>
            <Title>{ capitalize(order.first_name + " " + order.last_name) }</Title>
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
                      { order.document }
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
                      { order.phone }
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
                      Variedades
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { order.varieties.map(variety => capitalize(variety.variety_name)).join(", ") }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Cantidad
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { quantity }
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
                      Adelanto
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      S/. { order.advance }
                    </Text>
                  </FlexColumn>
                </FlexRow>
                <FlexRow>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Pendiente
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      S/. { order.pending }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Fecha inicio
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { new Date(order.init_date).toLocaleDateString("es-ES", options) }
                    </Text>
                  </FlexColumn>
                  <FlexColumn>
                    <Text
                      weight={800}
                      size={17}
                    >
                      Fecha entrega
                    </Text>
                    <Text
                      color={COLORS.taupe}
                      weight={600}
                      style={{marginTop: "-0.3rem"}}
                    >
                      { new Date(order.finish_date).toLocaleDateString("es-ES", options) }
                    </Text>
                  </FlexColumn>
                </FlexRow>
                <Row 
                  gap={1.5}
                  style={{alignSelf: "center"}}
                >
                  <Button
                    onClick={() => setEditModal(true)}
                    Icon={MdEdit}
                    color="warning"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => setDeleteModal(true)}
                    iconSize={17}
                    Icon={FaTrashAlt}
                    color="danger"
                  >
                    Eliminar
                  </Button>
                </Row>
              </Section>
              <Section
                width="60%"
              >
                <Text
                  weight={800}
                  size={18}
                >
                  Factura
                </Text>
                <Button
                  fontSize={17}
                  iconSize={18}
                  Icon={BsFillWalletFill}
                >
                  Generar
                </Button>
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
            <Modal
              isActive={editModal}
              setIsActive={setEditModal}
            >
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleUpdate}
              >
                {({
                  values,
                  errors,
                  touched,
                  isValid,
                  handleChange,
                  handleBlur,
                  handleSubmit
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Title
                      color={COLORS.persian}
                      size={1.8}
                      style={{marginBottom: "0.5rem"}}
                    >
                      Editar pedido
                    </Title>
                    <Input
                      id="phone"
                      label="Teléfono"
                      placeholder="123456789"
                      value={values.phone}
                      touched={touched.phone}
                      error={errors.phone}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                    <Input
                      id="destination"
                      label="Destino"
                      placeholder="ej. Cuzco"
                      value={values.destination}
                      touched={touched.destination}
                      error={errors.destination}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                    <Input
                      id="advance"
                      label="Adelanto"
                      placeholder="S/. 0.00"
                      value={values.advance}
                      touched={touched.advance}
                      error={errors.advance}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                    <Button
                      type="submit"
                      disabled={!isValid}
                      style={{marginTop: "0.5rem"}}
                      size="full"
                    >
                      Editar
                    </Button>
                  </Form>
                )}
              </Formik>
            </Modal>
          </>
      )
  )
}

export default VitroOrder;
