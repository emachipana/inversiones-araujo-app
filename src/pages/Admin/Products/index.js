import { useState } from "react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import ProductCard from "../../../components/ProductCard";
import { Title } from "../styles";
import { Filter, Form, Section } from "./styles";
import { MdAdd } from "react-icons/md";
import Modal from "../../../components/Modal";
import { Formik } from "formik";
import validate from "./validate";
import { COLORS, FlexRow } from "../../../styles";
import Input from "../../../components/Input";
import apiFetch from "../../../services/apiFetch";
import { useNavigate } from "react-router-dom";

function Products() {
  const [ isOpen, setIsOpen ] = useState(false);
  // const { products, isLoading, setIsLoading, setError, addProduct } = useData();
  const products = [];
  const isLoading = false;
  const setIsLoading = () => {};
  const setError = () => {};
  const addProduct = () => {};

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: ""
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      let newProduct = await apiFetch("products", { body: values });
      const productImage = await apiFetch("product_images", {
        body: {
          product_id: newProduct.data.id,
          image_id: 2 // momentaneo
        }
      });

      newProduct = {...newProduct.data, images: [productImage.data]};
      addProduct(newProduct);
      setIsLoading(false);
      setIsOpen(false);
      setError(null);
      navigate(`/admin/productos/${newProduct.id}`);

    }catch(e) {
      setIsLoading(false);

      setError("Hubo un error, vuelve a intentarlo");
    }
  }

  return (
    <>
      <Title>Productos</Title>
      <Section>
        <Filter gap={1}>
          <Button
            fontSize={17}
          >
            Todo
          </Button>
          <Button
            fontSize={17}
            color="white"
          >
            Campo
          </Button>
          <Button
            fontSize={17}
            color="white"
          >
            Laboratorio
          </Button>
          <Button
            fontSize={17}
            color="white"
          >
            Invernadero
          </Button>
          <Button
            fontSize={17}
            color="white"
          >
            Riego
          </Button>
        </Filter>
        <Button
          Icon={MdAdd}
          onClick={() => setIsOpen(true)}
        >
          Crear producto
        </Button>
      </Section>
      <Section>
        {
          isLoading
          ? "Cargando..."
          : <>
              {
                !products.data || products.data.length <= 0
                ?
                <Title style={{margin: "0 auto"}}>
                  No hay productos disponibles
                </Title>
                :
                <>
                  {
                    products.data.map((product, index) => (
                      <ProductCard
                        isInAdmin
                        category_id={product.category_id * 1}
                        id={product.id}
                        img={product.images[0]?.image_url}
                        name={product.name}
                        price={product.price}
                        key={index}
                      />
                    ))
                  }
                  <Pagination 
                    currentPage={1}
                    nextLink=""
                    prevLink=""
                    pages={10}
                  />
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
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Title
                color={COLORS.persian}
                size={1.8}
                style={{marginBottom: "0.5rem"}}
              >
                Crear producto
              </Title>
              <Input 
                id="name"
                label="Nombre"
                placeholder="Nombre del producto"
                value={values.name}
                touched={touched.name}
                error={errors.name}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Input 
                id="category_id"
                label="Categoría"
                placeholder="Elige una categoría"
                value={values.category_id}
                touched={touched.category_id}
                error={errors.category_id}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <FlexRow gap={1}>
                <Input
                  id="price"
                  label="Precio"
                  placeholder="Precio del producto"
                  value={values.price}
                  touched={touched.price}
                  error={errors.price}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Input 
                  id="stock"
                  label="Cantidad"
                  placeholder="Cantidad entrante"
                  value={values.stock}
                  touched={touched.stock}
                  error={errors.stock}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </FlexRow>
              <Input 
                id="description"
                label="Descripción"
                placeholder="Descripción del producto"
                value={values.description}
                touched={touched.description}
                error={errors.description}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
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

export default Products;
