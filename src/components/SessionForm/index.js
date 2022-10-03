/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Alert, FormFeedback, FormGroup, Input, Label, Spinner } from "reactstrap";
import { useAuth } from "../../context/auth";
import Button from "../Button";
import { AlertStyles, Form, InputStyle, LabelStyle } from "./styles";

function SessionForm() {
  const { login, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values) => {
    const { username, password } = values;
    const errors = {};

    if(username === "") {
      errors.username = "Por favor rellena este campo";
    }else if(username.length < 5) {
      errors.username = "Como mínimo se aceptan 5 carácteres";
    }

    if(password === "") {
      errors.password = "Por favor rellena este campo";
    }else if(password.length < 6) {
      errors.password = "Como mínimo se aceptan 6 carácteres";
    }

    return errors;
  }

  const initialValues = { username: "", password: "" };

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    await login(values);
    setTimeout(() => {
      setIsLoading(false);
      resetForm();
    }, 500);
  }

  return (
    <Formik
      initialValues={initialValues}
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
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label css={LabelStyle} htmlFor="username">Usuario</Label>
            <Input
              css={InputStyle}
              id="username"
              name="username"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={errors.username && touched.username}
              valid={!errors.username && touched.username}
            />
            {
              errors.username  && touched.username && (
                <FormFeedback>{ errors.username }</FormFeedback>
              )
            }
          </FormGroup>
          <FormGroup>
            <Label css={LabelStyle} htmlFor="password">Contraseña</Label>
            <Input
              css={InputStyle} 
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={errors.password && touched.password}
              valid={!errors.password && touched.password}
            />
            {
              errors.password  && touched.password && (
                <FormFeedback>{ errors.password }</FormFeedback>
              )
            }
          </FormGroup>
          {
            error 
            ?
            <Alert color="danger" css={AlertStyles}>{ error.replaceAll(`"`, " ") }</Alert>
            :
            null
          }
          <Button
            type="submit"
            block
            disabled={!isValid || isLoading}
          >
            {
              isLoading
              ?
              <>
              <Spinner 
                size="sm"
              />
              Cargando...
              </>
              :
              "Entrar"  
            }
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SessionForm;
