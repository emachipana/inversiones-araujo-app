/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { capitalize } from "../../helpers/capitalize";
import { Container, Label, Section, Main, TextError } from "./styles";
import { onBlur, setColor } from ".";

function Select({ id, label, handleChange, options = [], handleBlur, error, touched, backgroundColor }) {
  const [focused, setFocused] = useState(false);
  const color = setColor(error, touched, focused);

  return (
    <Container>
      { label && <Label htmlFor={id}>{ label }</Label> }
      <Section
        color={color}
        backgroundColor={backgroundColor}
      >
        <select
          id={id}
          name={id}
          onChange={handleChange}
          css={Main}
          onBlur={(e) => onBlur(e, setFocused, handleBlur)}
        >
          <option selected disabled value="">Eligen una</option>
          {
            options.map((value, index) => (
              <option value={value} key={index}>{ capitalize(value) }</option>
            ))
          }
        </select>
      </Section>
      { touched && error && <TextError>{ error }</TextError> }
    </Container>
  );
}

export default Select;
