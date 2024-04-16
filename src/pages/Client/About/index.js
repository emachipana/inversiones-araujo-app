import Banner from "../../../components/Banner";
import { COLORS, FlexColumn, Text } from "../../../styles";
import { Title } from "../styles";
import { Image, Section, Val } from "./styles";
import { FaHandshake } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";
import { BsFillFlagFill } from "react-icons/bs";

function About() {
  return (
    <>
      <Banner
        title="Conoce nuestra historia"
        subTitle="Somos Inversiones Araujo JL"
      />
      <Section>
        <FlexColumn
          style={{width: "700px"}}
          gap={0.7}
        >
          <Title
            size={2}
          >
            Sobre <span className="persian">nosotros</span>
          </Title>
          <Text
            color={COLORS.taupe}
            align="start"
          >
            INVERSIONES ARAUJO JL E.I.R.L. nace en abril del 2015 cuando dos ingenieros
            agrónomos con amplia experiencia en el rubro agrícola, deciden formar una
            empresa dedicada a la producción de semillas pre básica (plántulas in vitro
            y tuberculillos), consolidándose como una empresa emergente con gran capacidad
            para llevar a cabo los proyectos de sus clientes. 
          </Text>
          <Text
            color={COLORS.taupe}
            align="start"
          >
            A la fecha, la empresa ha realizado importantes entregas a productores de 
            semilla a nivel de invernaderos y a entidades públicas, así mismo, se viene
            participando en las actividades de investigación con el Instituto Nacional
            de Innovación Agraria (INIA E.E. Santa Ana Huancayo).
          </Text>
        </FlexColumn>
        <Image 
          src="/img/lab2.jpg"
          alt="info-photo"
        />
      </Section>
      <Section
        justify="space-evenly"
        align="flex-start"
      >
        <FlexColumn
          align="center"
          style={{width: "380px"}}
        >
          <Title
            size={1.8}
          >
            Misión
          </Title>
          <Text
            align="justify"
            color={COLORS.taupe}
          >
            Disponer plántulas IN VITRO de primera calidad y que satisfagan completamente
            los requerimientos de nuestros clientes, estableciendo relaciones de largo
            plazo basadas en nuestras capacidades, nuestra honestidad y nuestro compromiso.
          </Text>
        </FlexColumn>
        <FlexColumn
          align="center"
          style={{width: "380px"}}
        >
          <Title
            size={1.8}
          >
            Visión
          </Title>
          <Text
            align="justify"
            color={COLORS.taupe}
          >
            Posicionarnos en el mercado nacional como una empresa confiable, comprometida,
            responsable en la dotación de plántulas IN VITRO.
          </Text>
        </FlexColumn>
      </Section>
      <Section>
        <FlexColumn
          style={{width: "100%"}}
        >
          <Title
            size={1.8}
          >
            Valores
          </Title>
          <Section 
            padding="2rem"
            justify="space-between"
            align="flex-start"
          >
            <Val>
              <FaHandshake 
                size={45}
                color={COLORS.persian}
              />
              <FlexColumn
                style={{width: "80%", padding: "0.2rem 0"}}
                gap={0.1}
              >
                <Title
                  size={1.3}
                >
                  Compromiso
                </Title>
                <Text
                  align="justify"
                  color={COLORS.taupe}
                >
                  Inversiones Araujo se encuentra firmemente comprometida con la preservación
                  del medio ambiente y la promoción de la sostenibilidad en nuestro entorno. 
                  Nos dedicamos a la generación de empleo con un enfoque en mantener altos 
                  estándares de servicio, honestidad, esfuerzo y responsabilidad.
                </Text>
              </FlexColumn>
            </Val>
            <Val>
              <GiLightBulb 
                size={45}
                color={COLORS.persian}
              />
              <FlexColumn
                style={{width: "80%", padding: "0.2rem 0"}}
                gap={0.1}
              >
                <Title
                  size={1.3}
                >
                  Innovación
                </Title>
                <Text
                  align="justify"
                  color={COLORS.taupe}
                >
                  Nos caracterizamos por ofrecer productos innovadores y de la más alta calidad
                  en el sector agrícola y la agroindustria, que satisfacen las necesidades de
                  nuestros clientes. 
                </Text>
              </FlexColumn>
            </Val>
            <Val>
              <BsFillFlagFill 
                size={45}
                color={COLORS.persian}
              />
              <FlexColumn
                style={{width: "80%", padding: "0.2rem 0"}}
                gap={0.1}
              >
                <Title
                  size={1.3}
                >
                  Honestidad
                </Title>
                <Text
                  align="justify"
                  color={COLORS.taupe}
                >
                  Actuar con transparencia logrando ganar una mayor confianza con nuestros cliente
                  y colaboradores, es un valor que nos caracteriza en todo lo que hacemos.
                </Text>
              </FlexColumn>
            </Val>
          </Section>
        </FlexColumn>
      </Section>
    </>
  );
}

export default About;
