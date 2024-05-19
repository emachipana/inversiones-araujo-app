import { useState } from "react";
import { Title } from "../styles";
import { Filter, Form, Section } from "../Products/styles";
import Button from "../../../components/Button";
import { MdAdd } from "react-icons/md";
import OrderCard from "../../../components/OrderCard";
import getPersonData from "../../../services/reniec";
import Modal from "../../../components/Modal";
import { Formik } from "formik";
import validate from "./validate";
import Input from "../../../components/Input";
import { COLORS } from "../../../styles";
import apiFetch from "../../../services/apiFetch";
import { FlexRow } from "./styles";

function VitroOrders() {
  const [ isOpen, setIsOpen ] = useState(false);
  // const { vitroOrders, isLoading, setIsLoading, setError, addVitroOrder } = useData();
  const vitroOrders = [];
  const isLoading = false;
  const setIsLoading = () => {}
  const setError = () => {}
  const addVitroOrder = () => {}

  const initialValues = {
    document: "",
    first_name: "",
    last_name: "",
    destination: "",
    variety_id: "",
    price: "",
    quantity: "",
    advance: "",
    phone: ""
  }

  const handleSubmit = async (values) => {
    try {
      const body = {
        ...values,
        first_name: values.first_name,
        last_name: values.last_name,
        document: values.document,
        variety_id: 2,
        document_type: "dni",
        init_date: "2024-04-10 17:18:43",
        finish_date: "2024-06-16 07:55:36"
      }

      const vitroOrder = await apiFetch("vitro_orders", { body });
      addVitroOrder(vitroOrder.data);
      setIsLoading(false);
      setIsOpen(false);
      setError(null);
    }catch(e) {
      setError("Hubo un error, vuelve a intentarlo");

      setIsLoading(false);
    }
  }

  const onDocumentChange = async (e, setFieldValue) => {
    const value = e.target.value;
    setFieldValue("document", value);

    if(value.length === 8 && !isNaN(value * 1)) {
      try {
        const data = await getPersonData(value);

        if(!data.success) throw new Error("Sin datos encontrados");

        setFieldValue("first_name", data.nombres);
        setFieldValue("last_name", `${data.apellidoPaterno} ${data.apellidoMaterno}`);
      }catch(e) {
        console.error(e);

        setFieldValue("first_name", "");
        setFieldValue("last_name", "");
      }
    }
  }

  return (
    <>
      <Title>In vitro</Title>
      <Section>
        <Filter gap={2}>
          <Button 
            fontSize={17}
            color="white"
          >
            Destino
          </Button>
          <Button 
            fontSize={17}
            color="white"
          >
            Variedad
          </Button>
          <Button 
            fontSize={17}
            color="white"
          >
            Estado
          </Button>
        </Filter>
        <Button
          Icon={MdAdd}
          onClick={() => setIsOpen(true)}
        >
          Crear pedido
        </Button>
      </Section>
      <Section>
        {
          isLoading
          ? "Cargando..."
          : <>
              {
                !vitroOrders.data || vitroOrders.data.length <= 0
                ?
                <Title style={{margin: "0 auto"}}>
                  No hay pedidos disponibles
                </Title>
                :
                <>
                  {
                    vitroOrders.data.map((order, index) => (
                      <OrderCard
                        destination={order.destination}
                        key={index}
                        client_name={order.first_name}
                        status={order.status}
                        variety={order.variety.name}
                      />
                    ))
                  }
                </>
              }
            </>
        }
      </Section>
      <Modal
        setIsActive={setIsOpen}
        isActive={isOpen}
        size="lg"
      >
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit}>
              <Title
                color={COLORS.persian}
                size={1.8}
                style={{marginBottom: "0.5rem"}}
              >
                Crear pedido
              </Title>
              <FlexRow
                width="100%"
                gap={1}
              >
                <Input 
                  id="document"
                  label="DNI"
                  placeholder="Ingresa el dni"
                  value={values.document}
                  handleChange={(e) => onDocumentChange(e, setFieldValue, errors.document)}
                  handleBlur={handleBlur}
                  error={errors.document}
                  touched={touched.document}
                />
                <Input 
                  id="first_name"
                  label="Nombres"
                  placeholder="Ingresa el nombre"
                  value={values.first_name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.first_name}
                  touched={touched.first_name}
                />
                <Input 
                  id="last_name"
                  label="Apellidos"
                  placeholder="Ingresa los apellidos"
                  value={values.last_name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.last_name}
                  touched={touched.last_name}
                />
              </FlexRow>
              <FlexRow 
                width="100%"
                gap={1}
              >
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
                  id="variety_id"
                  label="Variedad"
                  placeholder="ej. Andina"
                  value={values.variety_id}
                  touched={touched.variety_id}
                  error={errors.variety_id}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Input
                  id="price"
                  label="Precio"
                  placeholder="S/. 0.00"
                  value={values.price}
                  touched={touched.price}
                  error={errors.price}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FlexRow>
              <FlexRow 
                gap={1}
                width="100%"
              >
                <Input
                  id="quantity"
                  label="Cantidad"
                  placeholder="ej. 5000"
                  value={values.quantity}
                  touched={touched.quantity}
                  error={errors.quantity}
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
              </FlexRow>
              <Button
                type="submit"
                disabled={!isValid}
                style={{marginTop: "0.5rem"}}
                size="full"
              >
                Agregar
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default VitroOrders;
