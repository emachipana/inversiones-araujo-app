function validate(values) {
  const errors = {};

  if(!values.name) {
    errors.name = "Este campo es obligatorio";
  }else if(values.name.length < 3) {
    errors.name = "El mínimo son 3 caracteres";
  }

  if(!values.description) {
    errors.description = "Este campo es obligatorio";
  }else if(values.description.length < 10) {
    errors.description = "El mínimo son 10 caracteres";
  }

  if(!values.price) {
    errors.price = "Este campo es obligatorio";
  }else if(values.price <= 0) {
    errors.price = "El valor debe ser mayor a 0";
  }else if((values.price * 1).toString() === "NaN") {
    errors.price = "Solo se aceptan números";
  }

  if(!values.stock) {
    errors.stock = "Este campo es obligatorio";
  }else if(values.stock <= 0) {
    errors.stock = "El valor debe ser mayor a 0";
  }else if((values.stock * 1).toString() === "NaN") {
    errors.stock = "Solo se aceptan números";
  }

  if(!values.category_id) errors.category_id = "Este campo es obligatorio";

  if(!values.image) errors.image = "Este campo es obligatorio";
  
  return errors;
}

export default validate;
