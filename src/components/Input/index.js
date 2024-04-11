import { useState } from "react";
import { COLORS } from "../../styles";
import { Container, Label, Main, Section, TextError } from "./styles";

function Input({ 
  id, disabled, label, placeholder,
  type, value, handleChange, handleBlur,
  error, touched, Icon}) {

  const [focused, setFocused] = useState(false);

  const onBlur = () => {
    setFocused(false);

    handleBlur && handleBlur();
  }

  return (
    <Container>
      { label && <Label for={id}>{ label }</Label> }
      <Section
        focused={focused}
        error={error}
      >
        { Icon && <Icon size={25} color={error ? COLORS.red : (focused ? COLORS.persian : COLORS.gray)}/> }
        <Main 
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          type={type || "text"}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={() => setFocused(true)}
        />
      </Section>
      { touched && error && <TextError>{ error }</TextError> }
    </Container>
  );
}

export default Input;
