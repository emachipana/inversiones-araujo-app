/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input, FormFeedback, Alert, Spinner } from "reactstrap";
import { post } from "../../services";
import { AlertStyles, InputStyle } from "../../components/SessionForm/styles";

function FormModal({ title, handleClose, type, setParent }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values) => {
    const { categoryName } = values;
    const errors = {};

    if(categoryName === "") errors.categoryName = "Este campo es obligatorio";
    
    return errors;
  }

  const initialValues = { categoryName: "" };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try{
      const response = await post("categories", { name: values.categoryName });
      setParent(old => [...old, { ...response, sub_categories: [] }]);
      setTimeout(() => {
        setIsLoading(false);
        handleClose();
      }, 500);

    }catch(e) {
      setError(e.message.replaceAll(`["`, " ").replaceAll(`"]`, " "));
      setIsLoading(false);
    }
  }

  return (
    <Modal
      size="sm"
      isOpen
      toggle={handleClose}
    >
      <ModalHeader
        toggle={handleClose}
      >
        <span
          style={{fontSize: "1.5rem"}}
        >
          Agregar { title }
        </span>
      </ModalHeader>
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
          <form onSubmit={handleSubmit}>
            <ModalBody>
            <FormGroup>
              <Label
                style={{fontWeight: 700}}
                htmlFor="categoryName"
              >
                Categoría
              </Label>
              <Input
                id="categoryName"
                name="categoryName"
                placeholder="Fertilizantes..."
                css={InputStyle}
                value={values.categoryName}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={errors.categoryName && touched.categoryName}
                valid={!errors.categoryName && touched.categoryName}
              />
              {
                errors.categoryName && touched.categoryName && (
                  <FormFeedback>{ errors.categoryName }</FormFeedback>
                )
              }
            </FormGroup>
            {
              error
              ?
              <Alert 
                color="danger"
                css={AlertStyles}
              >{ error.includes("already been taken") ? "Esta categoría ya existe" : error }</Alert>
              :
              null
            }
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={!isValid || isLoading}
                style={{fontWeight: "700"}}
                type="submit"
                color="success"
              >
                {
                  isLoading
                  ?
                  <>
                    <Spinner 
                      style={{margin: "0 0.5rem"}}
                      size="sm"
                    />
                    Agregando...
                  </>
                  :
                  "Agregar"
                }
                
              </Button>
              {" "}
              <Button
                style={{fontWeight: "700"}}
                onClick={handleClose}
                color="warning"
              >
                Cancelar
              </Button>
            </ModalFooter>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default FormModal;
