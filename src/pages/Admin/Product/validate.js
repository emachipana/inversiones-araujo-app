export const validate = (values) => {
  const errors = {};

  if(!values.price) {
    errors.price = "Este campo es obligatorio";
  }else if(isNaN((values.price * 1).toString())) {
    errors.price = "Solo se aceptan números";
  }

  if(!values.stock) {
    errors.stock = "Este campo es obligatorio";
  }else if(isNaN((values.price * 1).toString())) {
    errors.stock = "Solo se aceptan números";
  }

  if(!values.description) {
    errors.description = "Este campo es obligatorio";
  }else if(values.description.length < 10) {
    errors.description = "El mínimo son 10 carácteres"
  }

  return errors;
}
