export const validate = (values) => {
  const errors = {};

  if(!values.phone) {
    errors.phone = "Este campo es obligatorio";
  }else if(isNaN((values.phone * 1).toString())) {
    errors.phone = "Solo se aceptan números";
  }
  
  if(!values.advance) {
    errors.advance = "Este campo es obligatorio";
  }else if(isNaN((values.advance * 1).toString())) {
    errors.advance = "Solo se aceptan números";
  }
  
  if(!values.destination) errors.destination = "Este campo es obligatorio";

  return errors;
}
