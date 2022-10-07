/** @jsxImportSource @emotion/react */
import { Alert, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { AlertStyles, InputStyle } from "../SessionForm/styles";

function CategoryForm({ values, handleChange, handleBlur, errors, touched, error }) {
  return (
    <>
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
    </>
  );
}

export default CategoryForm;
