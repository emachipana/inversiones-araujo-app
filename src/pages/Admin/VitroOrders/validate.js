function validate(values) {
  const errors = {};

  if(!values.document) {
    errors.document = "Este campo es obligatorio";
  }else if(isNaN(values.document * 1)) {
    errors.document = "Solo se aceptan números";
  }else if(values.document.length !== 8) {
    errors.document = "Debe escribir 8 dígitos";
  }

  if(!values.first_name) errors.first_name = "Este campo es obligatorio";
  if(!values.last_name) errors.last_name = "Este campo es obligatorio";

  if(!values.destination) errors.destination = "Este campo es obligatorio";

  if(!values.variety_id) errors.variety_id = "Este campo es obligatorio";

  if(!values.price) {
    errors.price = "Este campo es obligatorio";
  }else if(isNaN(values.price * 1)) {
    errors.price = "Solo se aceptan números";
  }

  if(!values.quantity) {
    errors.quantity = "Este campo es obligatorio";
  }else if(isNaN(values.quantity * 1)) {
    errors.quantity = "Solo se aceptan números";
  }

  if(!values.advance) {
    errors.advance = "Este campo es obligatorio";
  }else if(isNaN(values.advance * 1)) {
    errors.advance = "Solo se aceptan números";
  }

  if(!values.phone) {
    errors.phone = "Este campo es obligatorio";
  }else if(isNaN(values.phone * 1)) {
    errors.phone = "Solo se aceptan números";
  }

  return errors;
}

export default validate;
