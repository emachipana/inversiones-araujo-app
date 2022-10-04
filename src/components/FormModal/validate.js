function validate(values, type) {
  const errors = {};

  if (type === "category") {
    if (values.categoryName === "") errors.categoryName = "Este campo es obligatorio";
  }else {
    if (values.name === "") errors.name = "Este campo es obligatiorio";

    if (values.sub_category === "") errors.sub_category = "Debes elegir uno";
    
    if (values.stock === "") {
      errors.stock = "Este campo es obligatorio";
    }else if (values.stock <= 0) {
      errors.stock = "Tiene que ser mayor que 0";
    }else if (typeof values.stock !== "number") {
      errors.stock = "Solo se aceptan numeros";
    }

    if (values.price === "") {
      errors.price = "Este campo es obligatorio";
    }else if (values.price <= 0) {
      errors.price = "Tiene que ser mayor que S/. 0";
    }else if (typeof values.price !== "number") {
      errors.price = "Solo se aceptan numeros";
    }

    if (values.description === "") errors.description = "Este campo es obligatiorio";

    if (values.unit_metric === "") errors.unit_metric = "Este campo es obligatiorio";
  }

  return errors;
}

export default validate;
