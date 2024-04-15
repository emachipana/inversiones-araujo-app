/** @jsxImportSource @emotion/react */
import { IoArrowDownOutline } from "react-icons/io5";
import { Title } from "../../pages/Client/styles";
import { COLORS, Text } from "../../styles";
import { Container, IconStyle } from "./styles";

function Banner({ title, subTitle }) {
  return (
    <Container>
      <div>
        <Title color={COLORS.white}>
          { title }
        </Title>
        <Text color={COLORS.white}>
          { subTitle }
        </Text>
      </div>
      <IoArrowDownOutline
        size={45}
        color={COLORS.white}
        css={IconStyle}
      />
    </Container>
  );
}

export default Banner;
