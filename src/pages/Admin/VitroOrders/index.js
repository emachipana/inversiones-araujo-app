import { useState } from "react";
import { useData } from "../../../context/data";
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
import { COLORS, FlexRow } from "../../../styles";
import apiFetch from "../../../services/apiFetch";

const baseInfo = {
  document: "",
  first_name: "",
  last_name: "",
  error: {
    document: null
  },
  blur: {
    document: false
  }
}

function VitroOrders() {
  const [info, setInfo] = useState(baseInfo);
  const [ isOpen, setIsOpen ] = useState(false);
  const { vitroOrders, isLoading, setIsLoading, setError, addVitroOrder } = useData();

  const initialValues = {
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
        first_name: info.first_name,
        last_name: info.last_name,
        document: info.document,
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
      setInfo(baseInfo);
    }catch(e) {
      setError("Hubo un error, vuelve a intentarlo");

      setIsLoading(false);
    }
  }

  const handleChangeInfo = async (e) => {
    if(e.target.value.length > 8) return;

    setInfo((info) => ({
      ...info,
      document: e.target.value,
      error: {
        document: e.target.value.trim().length > 0 ? null : info.error.document
      }
    }));

    if((e.target.value * 1).toString() === "NaN") setInfo((info) => ({
      ...info,
      error: {
        document: "Solo se aceptan números"
      }
    }));

    if(e.target.value.length === 8) {
      const data = await getPersonData(e.target.value);

      if(data.success) {
        setInfo((info) => ({
          ...info,
          first_name: data.nombres,
          last_name: `${data.apellidoPaterno} ${data.apellidoMaterno}`
        }));
      }else {
        setInfo((info) => ({
          ...info,
          first_name: "",
          last_name: ""
        }));
      }

    }
  }

  const handleBlurInfo = (e) => {
    setInfo((info) => ({
      ...info,
      blur: {
        document: true
      }
    }));

    if(!e.target.value) setInfo((info) => ({
      ...info,
      error: {
        document: "Este campo es obligatorio"
      }
    }));
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
      >
        <Formik
          initialValues={initialValues}
          validate={(values) => validate(values, info)}
          onSubmit={handleSubmit}
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
                Crear pedido
              </Title>
              <Input 
                id="document"
                label="DNI"
                placeholder="Ingresa el dni"
                value={info.document}
                handleChange={handleChangeInfo}
                handleBlur={handleBlurInfo}
                error={info.error.document}
                touched={info.blur.document}
              />
              <Input 
                id="first_name"
                label="Nombres"
                placeholder="Ingresa el nombre"
                value={info.first_name || values.first_name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.first_name}
                touched={touched.first_name}
                disabled={!!info.first_name}
              />
              <Input 
                id="last_name"
                label="Apellidos"
                placeholder="Ingresa los apellidos"
                value={info.last_name || values.last_name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.last_name}
                touched={touched.last_name}
                disabled={!!info.last_name}
              />
              <FlexRow gap={1}>
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
              </FlexRow>
              <FlexRow gap={1}>
                <Input
                  id="price"
                  label="Precio"
                  placeholder="S/."
                  value={values.price}
                  touched={touched.price}
                  error={errors.price}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
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
              </FlexRow>
              <FlexRow gap={1}>
                <Input
                  id="advance"
                  label="Adelanto"
                  placeholder="S/."
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
