import { useState } from 'react';
import Slider from 'rc-slider';
import { Container, Section } from './styles';
import Button from '../../../../components/Button';
import 'rc-slider/assets/index.css';
import { COLORS, FlexRow, Text } from '../../../../styles';

function InputRange({ min, max }) {
  const [values, setValues] = useState([min, max]);

  const handleChange = (values) => {
    setValues(values);
  };

  return (
    <Container>
      <Slider 
        range
        min={min}
        max={max}
        value={values}
        onChange={handleChange}
      />
      <Section>
        <Button
          fontSize={15}
          color="secondary"
        >
          Filtrar
        </Button>
        <FlexRow>
          <Text
            weight={600}
            color={COLORS.taupe}
          >
            Precio:
          </Text>
          <Text
            weight={600}
            color={COLORS.gray}
          >
            S/. {values[0]} - S/. {values[1]}
          </Text>
        </FlexRow>
      </Section>
    </Container>
  );
}

export default InputRange;