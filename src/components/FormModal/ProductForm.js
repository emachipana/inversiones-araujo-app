/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { get } from "../../services";
import { InputStyle } from "../SessionForm/styles";
import { Container, Image, Section } from "./styles";

function ProductForm({ errors, values, handleBlur, handleChange, touched, imgMessage, setImage, setImgMessage, edit, image }) {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response = await get("sub_categories");
      setSubCategories(response);
    }

    fetch();
  }, []);

  const upload = (e) => {
    setImage(e.target.files[0]);
    if(setImgMessage) setImgMessage(null);
  }

  return (
    <>
      <Section>
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
            placeholder="Urea..."
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
            htmlFor="sub_category"
          >
            Sub Categoría
          </Label>
          <Input
            id="sub_category_id"
            name="sub_category_id"
            type="select"
            css={InputStyle}
            value={values.sub_category_id}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={errors.sub_category_id && touched.sub_category_id}
            valid={!errors.sub_category_id && touched.sub_category_id}
          >
            <option value="" disabled>Elige una</option>
            {
              subCategories.map(subCategory => (
                <option 
                  value={subCategory.id}
                  key={subCategory.id}
                >
                  { `${subCategory.category_name} (${subCategory.name})` }
                </option>
              ))
            }
          </Input>
          {
            errors.sub_category_id && touched.sub_category_id && (
              <FormFeedback>{ errors.sub_category_id }</FormFeedback>
            )
          }
        </FormGroup>
      </Section>
      <Section>
        <FormGroup>
          <Label
            style={{fontWeight: 700}}
            htmlFor="stock"
          >
            Cantidad
          </Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            placeholder="15"
            css={InputStyle}
            value={values.stock}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={errors.stock && touched.stock}
            valid={!errors.stock && touched.stock}
          />
          {
            errors.stock && touched.stock && (
              <FormFeedback>{ errors.stock }</FormFeedback>
            )
          }
        </FormGroup>
        <FormGroup>
          <Label
            style={{fontWeight: 700}}
            htmlFor="price"
          >
            Precio
          </Label>
          <Input
            id="price"
            name="price"
            type="number"
            placeholder="S/. 150"
            css={InputStyle}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={errors.price && touched.price}
            valid={!errors.price && touched.price}
          />
          {
            errors.price && touched.price && (
              <FormFeedback>{ errors.price }</FormFeedback>
            )
          }
        </FormGroup>
      </Section>
      <Section>
        <FormGroup>
          <Label
            style={{fontWeight: 700}}
            htmlFor="description"
          >
            Descripción
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="Producto para..."
            css={InputStyle}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={errors.description && touched.description}
            valid={!errors.description && touched.description}
          />
          {
            errors.description && touched.description && (
              <FormFeedback>{ errors.description }</FormFeedback>
            )
          }
        </FormGroup>
        <FormGroup>
          <Label
            style={{fontWeight: 700}}
            htmlFor="unit_metric"
          >
            Unidad de medida
          </Label>
          <Input
            id="unit_metric"
            name="unit_metric"
            placeholder="Kg."
            css={InputStyle}
            value={values.unit_metric}
            onChange={handleChange}
            onBlur={handleBlur}
            invalid={errors.unit_metric && touched.unit_metric}
            valid={!errors.unit_metric && touched.unit_metric}
          />
          {
            errors.unit_metric && touched.unit_metric && (
              <FormFeedback>{ errors.unit_metric }</FormFeedback>
            )
          }
        </FormGroup>
      </Section>
      <Section>
        <FormGroup>
          <Label
            style={{fontWeight: 700}}
            htmlFor="marca"
          >
            Marca (*opcional)
          </Label>
          <Input
            id="marca"
            name="marca"
            placeholder="Fertica..."
            css={InputStyle}
            value={values.marca}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormGroup>
        <FormGroup>
          <Label
            style={{fontWeight: 700}}
            htmlFor="image"
          >
            Imagen
          </Label>
          <Input
            onChange={upload}
            type="file"
            id="image"
            name="image"
            accept="image/*"
            invalid={!!imgMessage}
            css={InputStyle}
          />
          {
            !!imgMessage && (
              <FormFeedback>{ imgMessage }</FormFeedback>
            )
          }
        </FormGroup>
      </Section>
      {
        edit
        &&
        <Container>
          <Label
            style={{fontWeight: 700}}
          >
            Imagen actual:
          </Label>
          <Image
            src={image}
            alt="product-photo"
          />
        </Container>
      }
    </>
  );
}

export default ProductForm;
