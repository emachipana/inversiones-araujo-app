/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { COLORS } from "../../styles";
import { Container, Label, Main, Section, TextError } from "./styles";


export const onBlur = (e, setFocused, handleBlur) => {
  setFocused(false);

  handleBlur && handleBlur(e);
}

export const setColor = (error, touched, focused) => {
  return error && touched
  ? COLORS.red
  : (touched && !error
    ? COLORS.persian
    : (focused
        ? COLORS.persian
        : COLORS.taupe));
}

function Input({ 
  id, disabled, label, placeholder,
  type, value, handleChange, handleBlur,
  error, touched, Icon, backgroundColor}) {

  const [focused, setFocused] = useState(false);
  const color = setColor(error, touched, focused);

  return (
    <Container>
      { label && <Label htmlFor={id}>{ label }</Label> }
      <Section
        color={color}
        backgroundColor={backgroundColor}
      >
        { Icon && <Icon size={25} color={color} /> }
        <input 
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          type={type || "text"}
          value={value}
          onChange={handleChange}
          onBlur={(e) => onBlur(e, setFocused, handleBlur)}
          onFocus={() => setFocused(true)}
          css={Main}
        />
      </Section>
      { touched && error && <TextError>{ error }</TextError> }
    </Container>
  );
}

export default Input;
