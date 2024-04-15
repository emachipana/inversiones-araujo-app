function validate(values) {
  const errors = {}

  if(!values.full_name) {
    errors.full_name = "Este campo es obligatorio";
  }else if(values.full_name.length < 3) {
    errors.full_name = "El mínimo son 3 caracteres";
  }

  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "El formato es incorrecto";
  }

  if(!values.subject) errors.subject = "Este campo es obligatorio";

  if(!values.content) {
    errors.content = "Este campo es obligatorio";
  }else if(values.content.length < 10) {
    errors.content = "El mínimo son 10 caracteres";
  }

  if(values.phone) {
    if((values.phone * 1).toString() === "NaN") {
      errors.phone = "Solo se aceptan números";
    }
  }

  return errors;
}

export default validate;
