function validate(values, current) {
  const errors = {}

  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "El formato es incorrecto";
  }

  if(!values.password) {
    errors.password = "Este campo es obligatorio";
  }else if(values.password.length < 6) {
    errors.password = "El mínimo son 6 caracteres";
  }

  if(current === "register") {
    if(!values.password || values.password !== values.password_confirm) errors.password_confirm = "Las contraseñas son diferentes";
  }

  return errors;
}

export default validate;
