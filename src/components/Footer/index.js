import { useNavigate } from "react-router-dom";
import { COLORS, FlexColumn, Text } from "../../styles";
import { Info } from "../Navbar/styles";
import { Container, Logo, Main, Section, Title } from "./styles";

function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <Main>
        <Logo 
          onClick={() => navigate("/")}
          alt="logo"
          src="/img/logo.png"
        />
        <Section>
          <FlexColumn gap={1}>
            <Title>Navegación</Title>
            <FlexColumn>
              <Text
                isLink
                color={COLORS.white}
              >
                Inicio
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Tienda
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Servicios
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Contáctanos
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Sobre nosotros
              </Text>
            </FlexColumn>
          </FlexColumn>
          <FlexColumn gap={1}>
            <Title>Servicios</Title>
            <FlexColumn>
              <Text
                isLink
                color={COLORS.white}
              >
                Asesorías
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Diágnostico
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Capacitaciones
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Plántulas invitro
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Productos agrícolas
              </Text>
            </FlexColumn>
          </FlexColumn>
          <FlexColumn gap={1}>
            <Title>Redes</Title>
            <FlexColumn>
              <Text
                isLink
                color={COLORS.white}
              >
                Facebook
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Instagram
              </Text>
              <Text
                isLink
                color={COLORS.white}
              >
                Whatsapp
              </Text>
            </FlexColumn>
          </FlexColumn>
        </Section>
      </Main>
      <Info justify="flex-start">
        <Text
          size={14} 
          color={COLORS.white}
        >
          Inversiones Araujo © Derechos reservados 2024
        </Text>
      </Info>
    </Container>
  )
}

export default Footer;
