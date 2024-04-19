function validate(values, info) {
  const errors = {};

  if(!info.first_name) {
    if(!values.first_name) errors.first_name = "Este campo es obligatorio";
    if(!values.last_name) errors.last_name = "Este campo es obligatorio";
  }

  if(!values.destination) errors.destination = "Este campo es obligatorio";

  if(!values.variety_id) errors.variety_id = "Este campo es obligatorio";

  if(!values.price) {
    errors.price = "Este campo es obligatorio";
  }else if((values.price * 1).toString() === "NaN") {
    errors.price = "Solo se aceptan números";
  }

  if(!values.quantity) {
    errors.quantity = "Este campo es obligatorio";
  }else if((values.quantity * 1).toString() === "NaN") {
    errors.quantity = "Solo se aceptan números";
  }

  if(!values.advance) {
    errors.advance = "Este campo es obligatorio";
  }else if((values.advance * 1).toString() === "NaN") {
    errors.advance = "Solo se aceptan números";
  }

  if(!values.phone) {
    errors.phone = "Este campo es obligatorio";
  }else if((values.phone * 1).toString() === "NaN") {
    errors.phone = "Solo se aceptan números";
  }

  return errors;
}

export default validate;
