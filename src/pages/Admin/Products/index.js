import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Pagination from "../../../components/Pagination";
import ProductCard from "../../../components/ProductCard";
import { Title } from "../styles";
import { Filter, Form, Section } from "./styles";
import { MdAdd } from "react-icons/md";
import Modal from "../../../components/Modal";
import { Formik } from "formik";
import validate from "./validate";
import { COLORS, FlexRow, Text } from "../../../styles";
import Input from "../../../components/Input";
import apiFetch from "../../../services/apiFetch";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../../context/admin";
import { capitalize } from "../../../helpers/capitalize";
import Select from "../../../components/Input/Select";
import { uploadImage } from "../../../services/uploadImage";

function Products() {
  const [ image, setImage ] = useState("");
  const [ currentCategory, setCurrentCategory ] = useState("todo");
  const [ isOpen, setIsOpen ] = useState(false);
  const { products, isLoading, setIsLoading, setError, setProductsBackup, productsBackup, categories, setProducts } = useAdmin();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category_id: "",
    image: "",
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const newProduct = await apiFetch("products", { body: values });
      const url = await uploadImage(image, newProduct.data.id);
      console.log(url);
      const imageData = await apiFetch("images", { body: { url } });
      await apiFetch("product_images", {
        body: {
          product_id: newProduct.data.id,
          image_id: imageData.data.id
        }
      });
      const products = await apiFetch("products");
      setProducts(products);
      setProductsBackup(products);
      setIsLoading(false);
      setIsOpen(false);
      setError(null);
      navigate(`/admin/productos/${newProduct.data.id}`);
    }catch(e) {
      setIsLoading(false);

      setError("Hubo un error, vuelve a intentarlo");
    }
  }

  const handlePaginationClick = async (link) => {
    try {
      setIsLoading(true);
      const products = await apiFetch(link, { isFull: true });
      setProducts(products);
      setIsLoading(false);
    }catch(e) {
      setIsLoading(false);
      setError(e.message);
    }
  }

  const handleCategoryClick = (category) => {
    if(category === currentCategory) return;

    setCurrentCategory(category);
  } 

  useEffect(() => {
    const fetch = async () => {
      try {
        if(currentCategory === "todo") return setProducts(productsBackup);
        setIsLoading(true);
        const found = categories.data.find(item => item.name === currentCategory);
        const products = await apiFetch(`products?category_id[eq]=${found?.id}`);
        setProducts(products);
        setIsLoading(false);
      }catch(e) {
        setIsLoading(false);
        console.error(e.message);
      }
    }

    fetch();
  }, [ currentCategory, categories, productsBackup, setIsLoading, setProducts ]);

  const options = categories.data?.map(category => ({ ...category, content: capitalize(category.name) }));

  const handleFileChange = (e, handleChange) => {
    handleChange(e);
    setImage(e.target.files[0]);
  }

  return (
    <>
      <Title>Productos</Title>
      <Section justify="space-between">
        <FlexRow gap={1} style={{flexWrap: "wrap"}}>
          <Filter
            isActive={currentCategory === "todo"}
            onClick={() => handleCategoryClick("todo")}
          >
            <Text
              size={17}
              weight={700}
            >
              Todo
            </Text>
          </Filter>
          {
            categories.data?.map((category, index) => (
              <Filter 
                key={index}
                isActive={currentCategory === category.name}
                onClick={() => handleCategoryClick(category.name)}
              >
                <Text
                  size={17}
                  weight={700}
                >
                  { capitalize(category.name) }
                </Text>
              </Filter>
            ))
          }
        </FlexRow>
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
                  !products.data || products?.data.length <= 0
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
                          product={product}
                          categories={categories.data}
                          key={index}
                        />
                      ))
                    }
                    <Pagination
                      onClick={handlePaginationClick}
                      currentPage={products.meta.current_page}
                      lastPage={products.meta.last_page}
                      links={products.links}
                      pageLinks={products.meta.links}
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
              <Select 
                id="category_id"
                label="Categoría"
                error={errors.category_id}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.category_id}
                options={options}
              />
              <FlexRow 
                gap={1}
                align="flex-start"
              >
                <Input
                  id="price"
                  label="Precio"
                  placeholder="S/. 0.00"
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
              <Input
                accept="image/*"
                type="file"
                id="image"
                label="Imagen"
                placeholder="Link de la imagen"
                value={values.image}
                touched={touched.image}
                error={errors.image}
                handleBlur={handleBlur}
                handleChange={(e) => handleFileChange(e, handleChange)}
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
