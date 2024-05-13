/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import Slider from "../../../components/Slider";
import { COLORS, FlexColumn, FlexRow, Text } from "../../../styles";
import { Title } from "../styles";
import { Banner, Categories, Category, Contact, Description, Image, Info, Service, Services, SubTitle, TextManager } from "./styles";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline, MdSmartDisplay } from "react-icons/md";
import { TbBrandWhatsapp } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";
import ProductCard from "../../../components/ProductCard";
import Button from "../../../components/Button";
import { useClient } from "../../../context/client";
import { elements } from "../../../data/home";

function Home() {
  const { trendProducts } = useClient();
  const navigate = useNavigate();

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
      <Banner>
        <Title color={COLORS.white}>🔥 EN OFERTA 🔥</Title>
      </Banner>
      <Categories 
        justify="center"
        gap={3}
      >
        {
          trendProducts.length <= 0
          ? 
          <Title>No hay productos disponibles</Title>
          :
          trendProducts.map((product, index) => (
            <ProductCard
              product={product}
              key={index}
            />
          ))
        }
      </Categories>
      <Contact>
        <div>
          <Title
            color={COLORS.white}
          >
            Realice aquí su consulta o cotización
          </Title>
          <Text
            color={COLORS.white}
            weight={600}
          >
            ¿Está buscando productos agrícolas para su proyecto?
          </Text>
        </div>
        <FlexRow 
          gap={2}
          style={{flexWrap: "wrap"}}
        >
          <FlexColumn>
            <FlexRow>
              <MdOutlineMailOutline
                color={COLORS.persian}
                size={22}
              />
              <Text
                color={COLORS.white}
              >
                inversionesaraujojl@gmail.com
              </Text>
            </FlexRow>
            <FlexRow>
              <TbBrandWhatsapp
                color={COLORS.persian}
                size={22}
              />
              <Text
                color={COLORS.white}
              >
                990849369
              </Text>
            </FlexRow>
          </FlexColumn>
          <Text
            color={COLORS.dim}
            size={50}
            weight={100}
            css={TextManager}
          >
            |
          </Text>
          <Button
            onClick={() => navigate("/contactanos")}
          >
            Realizar consulta
          </Button>
        </FlexRow>
      </Contact>
    </>
  )
}

export default Home;
