import { Formik } from "formik";
import { useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, ModalHeader, Spinner } from "reactstrap";
import { post } from "../../services";
import { uploadImage } from "../../services/cloudinary";
import CategoryForm from "./CategoryForm";
import ProductForm from "./ProductForm";
import validate from "./validate";

function FormModal({ title, handleClose, type, setParent, size }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [imgMessage, setImgMessage] = useState(null);

  const initialValues = type === "category" 
                        ?
                        { categoryName: "" }
                        :
                        {
                          name: "",
                          sub_category_id: "",
                          stock: "",
                          price: "",
                          description: "",
                          unit_metric: "",
                          marca: ""
                        };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try{
      if(type === "category") {
        const response = await post("categories", { name: values.categoryName });
        setParent(old => [...old, { ...response, sub_categories: [] }]);
      }else {
        if(image === "") {
          setImgMessage("Necesitas elegir una imagen");
          setIsLoading(false);
          return;
        }
        const photo_url = await uploadImage(image);
        const response = await post("products", { ...values, sub_category_id: values.sub_category_id * 1, photo_url: photo_url });
        setParent(old => [...old, response]);
      }
      setIsLoading(false);
      setImgMessage(null);
      handleClose();

    }catch(e) {
      setError(e.message.replaceAll(`["`, " ").replaceAll(`"]`, " "));
      setIsLoading(false);
      setImgMessage(null);
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
                  setImage={setImage}
                  setImgMessage={setImgMessage}
                  imgMessage={imgMessage}
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
                disabled={!isValid || isLoading || !!imgMessage}
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
