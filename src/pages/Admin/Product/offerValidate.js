export const offerValidate = (values) => {
  const errors = {};

  if(!values.price) {
    errors.price = "Este campo es obligatorio";
  }else if(isNaN((values.price * 1).toString())) {
    errors.price = "Solo se aceptan números";
  }

  return errors;
}
