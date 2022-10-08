/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Alert, Button, FormFeedback, FormGroup, Input, Label, Spinner } from "reactstrap";
import { AlertStyles, Form, InputStyle } from "../../components/SessionForm/styles";
import { useAuth } from "../../context/auth";
import { update } from "../../services";
import { Container, Title } from "./styles";

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, setUser } = useAuth();

  const validate = (values) => {
    const errors = {}

    if(values.name === ""){
      errors.name = "Este campo es obligatorio";
    }else if(values.name.length < 3){
      errors.name = "El minimo son 3 caracteres";
    }

    if(values.username === "") {
      errors.username = "Este campo es obligatorio";
    }else if(values.username.length < 5){
      errors.username = "El minimo son 5 caracteres";
    }
    
    if(values.newPassword !== "") {
      if(values.newPassword.length < 6 ) errors.newPassword = "El minimo son 6 caracteres";
    }

    return errors;
  }

  const handleSubmit = async (values) => {
    setIsLoading(true)
    let data = {};

    try {
      if(values.newPassword === "") {
        data = values;
      }else {
        data = {...values, password: values.newPassword};
      }

      const response = await update("profile", data);
      setUser(response);
      setIsLoading(false);
      setError(null);
    }catch(e) {
      setError(e.message.replaceAll(`["`, " ").replaceAll(`"]`, " "));
      setIsLoading(false);
      setUser(user);
    }
  }

  return (
    <>
      <Title
        style={{marginTop: "-4%"}}
      >
        Perfil
      </Title>
      <Container
        style={{padding: 0}}
      >
        <Formik
          initialValues={{
            name: user.name,
            username: user.username,
            newPassword: ""
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid
          }) => (
            <Form
              onSubmit={handleSubmit}
              isProduct
            >
              <FormGroup>
                <Label
                  style={{fontWeight: 700}}
                  htmlFor="name"
                >
                  Nombre
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nombre..."
                  css={InputStyle}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.name && touched.name}
                  valid={!errors.name && touched.name}
                />
                {
                  errors.name && touched.name && (
                    <FormFeedback>{ errors.name }</FormFeedback>
                  )
                }
              </FormGroup>
              <FormGroup>
                <Label
                  style={{fontWeight: 700}}
                  htmlFor="username"
                >
                  Usuario
                </Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Nombre..."
                  css={InputStyle}
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={(errors.username && touched.username) || error}
                  valid={!errors.username && touched.username}
                />
                {
                  errors.username && touched.username && (
                    <FormFeedback>{ errors.username }</FormFeedback>
                  )
                }
              </FormGroup>
              <FormGroup>
                <Label
                  style={{fontWeight: 700}}
                  htmlFor="user_type"
                >
                  Tipo de usuario
                </Label>
                <Input
                  id="user_type"
                  name="user_type"
                  css={InputStyle}
                  value={user.user_type === "admin" ? "Administrador" : "Cliente"}
                  disabled
                />
              </FormGroup>
              <FormGroup>
                <Label
                  style={{fontWeight: 700}}
                  htmlFor="newPassword"
                >
                  Cambiar contraseña
                </Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="***********"
                  css={InputStyle}
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.newPassword && touched.newPassword}
                  valid={!errors.newPassword && touched.newPassword && values.newPassword !== ""}
                />
                {
                  errors.newPassword && touched.newPassword && (
                    <FormFeedback>{ errors.newPassword }</FormFeedback>
                  )
                }
              </FormGroup>
              {
                error
                ?
                <Alert
                  color="danger"
                  css={AlertStyles}
                >{ error.includes("has already been taken") ? "El usuario ya existe" : error }</Alert>
                :
                null
              }
              <Button
                block
                style={{fontWeight: "700"}}
                color="warning"
                disabled={!isValid || isLoading}
              >
                {
                  isLoading
                  ?
                  <>
                    <Spinner 
                      size="sm"
                    />
                    Actualizando...
                  </>
                  :
                  "Actualizar"
                }
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default ProfilePage;
