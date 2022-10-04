import { Formik } from "formik";
import { useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader, Spinner } from "reactstrap";
import { post } from "../../services";
import CategoryForm from "./CategoryForm";
import ProductForm from "./ProductForm";
import validate from "./validate";

function FormModal({ title, handleClose, type, setParent, size }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = type === "category" 
                        ?
                        { categoryName: "" }
                        :
                        {
                          name: "",
                          sub_category: "",
                          stock: "",
                          price: "",
                          description: "",
                          unit_metric: ""
                        };

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
      size={size ? size : "sm"}
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
        validate={(values) => validate(values, type)}
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
              {
                type === "category"
                ?
                <CategoryForm 
                  error={error}
                  errors={errors}
                  values={values}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                :
                <ProductForm
                  error={error}
                  errors={errors}
                  values={values}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
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
