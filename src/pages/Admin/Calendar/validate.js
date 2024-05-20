export const validate = (values) => {
  const errors = {};

  if(!values.name) {
    errors.name = "Este campo es obligatorio";
  }else if(values.name.length < 3){
    errors.name = "El mínimo son 3 caracteres";
  }

  if(!values.description) {
    errors.description = "Este campo es obligatorio";
  }else if(values.description.length < 10) {
    errors.description = "El mínimo son 10 caracteres";
  }

  if(!values.date) errors.date = "Este campo es obligatorio";

  if(!values.event_type) errors.event_type = "Este campo es obligatorio";

  return errors;
}
