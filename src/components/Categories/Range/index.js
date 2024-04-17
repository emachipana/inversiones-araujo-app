import { useState } from 'react';
import Slider from 'rc-slider';
import { Container, Section } from './styles';
import 'rc-slider/assets/index.css';
import Button from '../../Button';
import { COLORS, FlexRow, Text } from '../../../styles';

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
          fontSize={14}
          color="secondary"
        >
          Filtrar
        </Button>
        <FlexRow>
          <Text
            size={15}
            weight={600}
            color={COLORS.taupe}
          >
            Precio:
          </Text>
          <Text
            size={15}
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
