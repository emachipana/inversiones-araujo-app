import { useNavigate } from "react-router-dom";
import Slider from "../../../components/Slider";
import { COLORS, FlexColumn, Text } from "../../../styles";
import { Title } from "../styles";
import { Categories, Category, Description, Image, Info, Service, Services, SubTitle } from "./styles";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

function Home() {
  const navigate = useNavigate();

  const elements = [
    {
      title: `Materiales e insumos para tu <span class='marked'>laboratorio</span>`,
      subtitle: "Todo lo que necesitas para implementar tu laboratorio",
      category: "laboratorio",
      img: "/img/lab.png",
      textButton: "Comprar"
    },
    {
      title: "Sustratos y herramientas para tu <span class='marked'>invernadero</span>",
      subtitle: "Los mejores abonos, sustratos y herramientas ideales para tu invernadero",
      category: "invernadero",
      img: "/img/inv.png",
      textButton: "Comprar"
    },
    {
      title: "<span class='marked'>Accesorios</span> y herramientas de <span class='marked'>riego</span> tecnificado",
      subtitle: "Las mejores herramientas y accesorios para tu próximo proyecto de riego tecnificado",
      category: "riego",
      img: "/img/riego.png",
      textButton: "Comprar"
    },
    {
      title: "<span class='marked'>Plantulas</span> in vitro de la mejor calidad",
      subtitle: "Plantulas in vitro de la más alta calidad con certificación y plantas madres de CIP",
      category: "agroinvitro",
      img: "/img/vitro.png",
      textButton: "Cotizar"
    },
  ];

  return (
    <>
      <Slider 
        elements={elements}
      />
      <FlexColumn 
        align="center"
        style={{marginTop: "1.5rem", padding: "1rem"}}
      >
        <Title>
          Productos para la agricultura
        </Title>
        <Text
          color={COLORS.taupe}
        >
          Contamos con productos para riego, laboratorio e invernadero
        </Text>
      </FlexColumn>
      <Categories>
        <Category onClick={() => navigate("/tienda?category=laboratorio")}>
          <Image 
            alt="laboratorio"
            src="/img/lab.jpeg"
          />
          <Description>
            <SubTitle>Laboratorio</SubTitle>
            <Text
              color={COLORS.taupe}
              align="start"
              size={15}
            >
              Los mejores insumos e implementos para potenciar la propagación de tus cultivos.
            </Text>
          </Description>
        </Category>
        <Category onClick={() => navigate("/tienda?category=invernadero")}>
          <Image 
            alt="invernadero"
            src="/img/slider.jpg"
          />
          <Description>
            <SubTitle>Invernadero</SubTitle>
            <Text
              color={COLORS.taupe}
              align="start"
              size={15}
            >
              Ten un mejor manejo de tus cultivos con todos los sustratos y herramientas que ofrecemos.
            </Text>
          </Description>
        </Category>
        <Category onClick={() => navigate("/tienda?category=riego")}>
          <Image 
            alt="riego"
            src="/img/riego.jpg"
          />
          <Description>
            <SubTitle>Riego tecnificado</SubTitle>
            <Text
              color={COLORS.taupe}
              align="start"
              size={15}
            >
              Empieza a aprovechar de manera eficiente el agua, con nuestra tecnología.
            </Text>
          </Description>
        </Category>
        <a
          href="http://localhost:3000/agroinvitro"
          target="_blank"
          rel="noreferrer"
        >
          <Category>
            <Image 
              alt="vitro"
              src="/img/vitro.jpg"
            />
            <Description>
              <SubTitle>Plántulas invitro</SubTitle>
              <Text
                color={COLORS.taupe}
                align="start"
                size={15}
              >
                Mejora exponencialmente tu producción por año con nuestras plántulas.
              </Text>
            </Description>
          </Category>
        </a>
      </Categories>
      <FlexColumn 
        align="center"
        style={{marginTop: "1.5rem", padding: "1rem"}}
      >
        <Title>
          Nuestros servicios
        </Title>
        <Text
          color={COLORS.taupe}
        >
          Nos respaldan nuestra amplia experiencia y personal calificado
        </Text>
      </FlexColumn>
      <Services>
        <Service>
          <FaMapLocationDot 
            size={50}
            color={COLORS.persian}
          />
          <Info>
            <SubTitle>
              Envío de productos a todo destino
            </SubTitle>
            <Text
              color={COLORS.taupe}
              align="start"
              size={15}
            >
              Envío de productos y paquetes
              a nivel nacional, enviamos con
              las empresas de transportes
              más confiables.
            </Text>
          </Info>
        </Service>
        <Service>
          <MdSmartDisplay 
            size={50}
            color={COLORS.persian}
          />
          <Info>
            <SubTitle>
              Talleres y asesoramiento
            </SubTitle>
            <Text
              color={COLORS.taupe}
              align="start"
              size={15}
            >
              Contamos con una amplia experiencia en el rubro agrícola, 
              realizamos talleres gratuitos y de pago.
            </Text>
          </Info>
        </Service>
        <Service>
          <IoDocumentText 
            size={50}
            color={COLORS.persian}
          />
          <Info>
            <SubTitle>
              Certificados y fichas técnicas
            </SubTitle>
            <Text
              color={COLORS.taupe}
              align="start"
              size={15}
            >
              Por la compra de cualquiera de nuestros productos le 
              otorgamos la ficha técnica del producto deseado.
            </Text>
          </Info>
        </Service>
      </Services>
    </>
  )
}

export default Home;
