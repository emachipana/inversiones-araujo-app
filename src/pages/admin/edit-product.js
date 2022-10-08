import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import ProductForm from "../../components/FormModal/ProductForm";
import validate from "../../components/FormModal/validate";
import { Form } from "../../components/SessionForm/styles";
import { get, update } from "../../services";
import { uploadImage } from "../../services/cloudinary";
import { Container, FlexRow, Title } from "./styles";

function EditProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");
  const [product, setProduct] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try{
      if(image === "") {
        await update("products", values, params.id*1);
        navigate("/products");
      }else {
        const photo_url = await uploadImage(image);
        await update("products", { ...values, photo_url: photo_url, photo_id: product.photos[0].id }, params.id*1);
        navigate("/products");
      }
    }catch(e) {
      setError(e.message.replaceAll(`["`, " ").replaceAll(`"]`, " "));
    }
  }

  useEffect(() => {
    async function fetch() {
      const response = await get("products", params.id * 1);
      setProduct(response);
      setIsLoading(false);
    }

    fetch();
  }, [params])

  return (
    <>
      <Title
        style={{marginTop: "-5%"}}
      >
        Editar Producto
      </Title>
      <Container
        style={{padding: 0}}
      >
        {
          isLoading
          ?
          <Spinner />
          :
          <Formik
            initialValues={{
              name: product.name,
              stock: product.stock,
              sub_category_id: product.sub_category_id,
              price: product.price,
              description: product.description,
              unit_metric: product.unit_metric,
              marca: product.marca
            }}
            onSubmit={handleSubmit}
            validate={(values) => validate(values, "product")}
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
                  <ProductForm
                    edit
                    image={product.photos[0].url}
                    setImage={setImage}
                    error={error}
                    errors={errors}
                    values={values}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <FlexRow>
                    <Button
                      block
                      style={{fontWeight: 700}}
                      type="submit"
                      color="success"
                      disabled={!isValid}
                    >
                      Actualizar
                    </Button>
                    <Button
                      onClick={() => navigate("/products")}
                      block
                      style={{fontWeight: 700}}
                      color="danger"
                    >
                      Cancelar
                    </Button>
                  </FlexRow>
                </Form>
              )}
            </Formik>
        }
      </Container>
    </>
  )
}

export default EditProductPage;
