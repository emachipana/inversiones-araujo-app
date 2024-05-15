import { Formik } from "formik";
import Banner from "../../../components/Banner";
import Input from "../../../components/Input";
import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import { Title } from "../styles";
import { Container, Form, Group, Info, Section } from "./styles";
import { FaMapLocation, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Button from "../../../components/Button";
import validate from "./validate";
import { useState } from "react";
import apiFetch from "../../../services/apiFetch";

function Contact() {
  const [isLoading, setIsLoding] = useState(false);
  const [textButton, setTextButton] = useState("Enviar");
  const initialValues = {
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    content: ""
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoding(true);
      setTextButton("Enviando...");
      const body = { ...values, origin: "inversiones" };
      await apiFetch("messages", { body });
      setTextButton("Enviado");
    }catch(e) {
      console.error(e);
      setIsLoding(false);
      setTextButton("Enviar");
    }
  }

  return (
    <>
      <Banner 
        title="¿Tienes alguna consulta?"
        subTitle="Estamos aquí para resolverla"
      />
      <Container>
        <FlexColumn
          gap={1.5}
        >
          <Title
            size={2}
          >
            Datos de <span className="persian">contacto</span>
          </Title>
          <Info>
            <FlexRow>
              <FaMapLocation 
                color={COLORS.persian}
                size={23}
              />
              <Text
                color={COLORS.taupe}
              >
                Sapallanga, Huancayo, Junín
              </Text>
            </FlexRow>
            <FlexRow>
              <IoMail 
                color={COLORS.persian}
                size={23}
              />
              <Text
                color={COLORS.taupe}
              >
                inversionesaraujojl@gmail.com
              </Text>
            </FlexRow>
            <FlexRow>
              <FaPhone 
                color={COLORS.persian}
                size={23}
              />
              <Text
                color={COLORS.taupe}
              >
                +51 990849369 - +51 958459693
              </Text>
            </FlexRow>
          </Info>
        </FlexColumn>
        <Section>
          <Title
            align="start"
            size={2}
          >
            Formulario de <span className="persian">contacto</span>
          </Title>
          <Text
            align="start"
            color={COLORS.taupe}
          >
            Si deseas incrementar exponencialmente tu producción agrícola, aprovechar tu terreno de cultivo y mantener
            tus plantas protegidas de plagas y enfermedades, envíanos tus datos. Contamos con la experiencia y equipos
            necesarios para asegurar resultados.
          </Text>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validate}
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
                <Group>
                  <div className="input">
                    <Input 
                      id="full_name"
                      placeholder="Nombres y apellidos"
                      error={errors.full_name}
                      touched={touched.full_name}
                      value={values.full_name}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <Input 
                      id="email"
                      placeholder="Correo electrónico"
                      error={errors.email}
                      touched={touched.email}
                      value={values.email}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>
                </Group>
                <Group>
                  <div className="input">
                    <Input 
                      id="phone"
                      placeholder="Teléfono (*opcional)"
                      error={errors.phone}
                      touched={touched.phone}
                      value={values.phone}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <Input 
                      id="subject"
                      placeholder="Asunto"
                      error={errors.subject}
                      touched={touched.subject}
                      value={values.subject}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>
                </Group>
                <div style={{width: "100%"}}>
                  <Input
                    id="content"
                    placeholder="Mensaje"
                    error={errors.content}
                    touched={touched.content}
                    value={values.content}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={!isValid || isLoading}
                  style={{alignSelf: "flex-start"}}
                >
                  { textButton }
                </Button>
              </Form>
            )}
          </Formik>
        </Section>
      </Container>
    </>
  );
}

export default Contact;
