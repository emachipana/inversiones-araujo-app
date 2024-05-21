import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../../services/apiFetch";
import { Title } from "../styles";
import { Container, FlexRow, Image, ImageCard, Section } from "./styles";
import { COLORS, FlexColumn, FlexRow as Row, Text } from "../../../styles";
import Button from "../../../components/Button";
import { BiSolidDiscount } from "react-icons/bi";
import { MdAdd, MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useAdmin } from "../../../context/admin";
import { capitalize } from "../../../helpers/capitalize";
import Modal from "../../../components/Modal";
import { ModalSection } from "../Messages/styles";
import { Formik } from "formik";
import { validate } from "./validate";
import { Form } from "../Products/styles";
import Input from "../../../components/Input";
import { offerValidate } from "./offerValidate";

function Product() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [offerModal, setOfferModal] = useState(false);
  const [product, setProduct] = useState(undefined);
  const [category, setCategory] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, setIsLoading, categories, setProducts, setProductsBackup } = useAdmin();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const product = await apiFetch(`products/${id}`);
        const category = categories.data?.find((category) => category.id === (product.data.category_id * 1));
        setCategory(category);
        setProduct(product.data);
        setIsLoading(false);
      }catch(e) {
        console.error(e);

        setIsLoading(false);
      }
    }

    fetch();
  }, [id, setIsLoading, categories]);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await apiFetch(`products/${product.id}`, { method: "DELETE" });
      const newProducts = await apiFetch("products");
      setProducts(newProducts);
      setProductsBackup(newProducts);
      navigate("/admin/productos");
      setIsLoading(false);
    }catch(e) {
      console.error(e);

      setIsLoading(false);
    }
  }

  const initialValues = {
    price: product?.price,
    stock: product?.stock,
    description: product?.description
  }

  const handleUpdate = async (values) => {
    try {
      setIsLoading(true);
      const updatedProduct = await apiFetch(`products/${product.id}`, { method: "PATCH", body: values });
      setProduct(updatedProduct.data);
      const products = await apiFetch("products");
      setProducts(products);
      setProductsBackup(products);
      setIsLoading(false);
      setEditModal(false);
    }catch(e) {
      console.error(e.message);
      setIsLoading(false);
    }
  }

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const body = {
        product_id: product.id,
        price: values.price
      }
      const discount = await apiFetch("discounts", { body });
      const updatedProduct = { ...product, discount: discount.data };
      setProduct(updatedProduct);
      const products = await apiFetch("products");
      setProducts(products);
      setProductsBackup(products);
      setIsLoading(false);
      setOfferModal(false);
    }catch(e) {
      console.error(e.message);
      setIsLoading(false);
    }
  }

  return (
    isLoading
    ? "Cargando..."
    : (!product
      ? <Title>El producto no esta disponible</Title>
      : <>
          <Title>{ product.name }</Title>
          <Container>
            <Section>
              <FlexRow>
                <FlexColumn>
                  <Text
                    weight={800}
                    size={17}
                  >
                    Categoría
                  </Text>
                  <Text
                    color={COLORS.taupe}
                    weight={600}
                    style={{marginTop: "-0.3rem"}}
                  >
                    { capitalize(category?.name) }
                  </Text>
                </FlexColumn>
                <FlexColumn>
                  <Text
                    weight={800}
                    size={17}
                  >
                    Precio
                  </Text>
                  <Text
                    color={COLORS.taupe}
                    weight={600}
                    style={{marginTop: "-0.3rem"}}
                  >
                    S/. { product.price }
                  </Text>
                </FlexColumn>
                <FlexColumn>
                  <Text
                    weight={800}
                    size={17}
                  >
                    Cantidad
                  </Text>
                  <Text
                    color={COLORS.taupe}
                    weight={600}
                    style={{marginTop: "-0.3rem"}}
                  >
                    { product.stock }
                  </Text>
                </FlexColumn>
              </FlexRow>
              <FlexColumn style={{width: "100%"}}>
                <Text
                  weight={800}
                  size={17}
                >
                  Descripción
                </Text>
                <Text
                  align="start"
                  color={COLORS.taupe}
                  weight={600}
                  style={{marginTop: "-0.3rem"}}
                >
                  { product.description }
                </Text>
              </FlexColumn>
              <FlexRow>
                {
                  product.discount
                  ? <Row style={{alignSelf: "center"}}>
                      <Text
                        weight={800}
                      >
                        Dscto.({product.discount.percentage}%): 
                      </Text>
                      <Text
                        weight={700}
                        color={COLORS.orange}
                      >
                        S/. {product.discount.price}
                      </Text>
                    </Row>
                  : <Button
                      onClick={() => setOfferModal(true)}
                      Icon={BiSolidDiscount}
                    >
                      Nueva oferta
                    </Button>
                }
                <Button
                  onClick={() => setEditModal(true)}
                  Icon={MdEdit}
                  color="warning"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => setDeleteModal(true)}
                  iconSize={17}
                  Icon={FaTrashAlt}
                  color="danger"
                >
                  Eliminar
                </Button>
              </FlexRow>
            </Section>
            <Section>
              <Text
                weight={800}
                size={17}
              >
                Imagenes
              </Text>
              <FlexRow
                gap={2}
                justify="center" 
                style={{flexWrap: "wrap"}}
              >
                {
                  product.images.map((image, index) => (
                    <ImageCard key={index}>
                      <Image
                        alt="product-image"
                        src={image.image_url}
                      />
                    </ImageCard>
                  ))
                }
                <ImageCard>
                  <MdAdd 
                    size={50}
                    color={COLORS.taupe}
                  />
                </ImageCard>
              </FlexRow>
            </Section>
          </Container>
          <Modal
            padding="1.2rem"
            isActive={deleteModal}
            setIsActive={setDeleteModal}
          >
            <ModalSection>
              <Text
                size={24}
                weight={700}
              >
                ¿Estas seguro de eliminar el producto?
              </Text>
              <Row
                gap={2}
              >
                <Button
                  onClick={handleDelete}
                  color="danger"
                >
                  Eliminar
                </Button>
                <Button
                  onClick={() => setDeleteModal(false)}
                >
                  Cancelar
                </Button>
              </Row>
            </ModalSection>
          </Modal>
          <Modal
            isActive={editModal}
            setIsActive={setEditModal}
          >
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleUpdate}
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
                    Editar producto
                  </Title>
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
                    Editar
                  </Button>
                </Form>
              )}
            </Formik>
          </Modal>
          <Modal
            isActive={offerModal}
            setIsActive={setOfferModal}
          >
            <Formik
              initialValues={{ price: "" }}
              validate={offerValidate}
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
                    Agregar descuento
                  </Title>
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
      )
  );
}

export default Product;
