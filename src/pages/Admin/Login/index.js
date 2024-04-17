import { Formik } from "formik";
import { Container, Form, Logo, Section } from "./styles";
import validate from "../../../components/Navbar/validate";
import Input from "../../../components/Input";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { COLORS, Text } from "../../../styles";
import Button from "../../../components/Button";

function Login() {
  const initialValues = {
    email: "",
    password: ""
  }

  const handleSubmit = (values) => console.log(values); 

  return (
    <Container>
      <Section>
        <Logo 
          alt="logo"
          src="/img/logo.png"
        />
        <Formik
          initialValues={initialValues}
          validate={(values) => validate(values, "login")}
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
            <Form
              onSubmit={handleSubmit}
            >
              <Input 
                id="email"
                placeholder="Ingresa tu correo"
                Icon={MdAlternateEmail}
                error={errors.email}
                touched={touched.email}
                value={values.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Input 
                id="password"
                placeholder="Ingresa tu correo"
                Icon={RiLockPasswordFill}
                error={errors.password}
                touched={touched.password}
                value={values.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Text
                isLink
                color={COLORS.blue}
                align="start"
              >
                Olvidé mi contraseña
              </Text>
              <Button
                style={{alignSelf: "center", marginTop: "1rem"}}
                type="submit"
                disabled={!isValid}
              >
                Iniciar sesión
              </Button>
            </Form>
          )}
        </Formik>
      </Section>
      <Section 
        isImage
      />
    </Container>
  );
}

export default Login;
