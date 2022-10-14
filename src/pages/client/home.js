import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import { get } from "../../services";
import { Brand, FlexColumn, FlexRow, Info, InfoSection, InfoText, SubTitle, Title } from "./styles";
import { FaRegClock } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function HomePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      const response = await get("products");
      setProducts(response);
    }

    fetch();
  }, []);

  return (
    <>
      <Hero />
      <FlexColumn>
        <SubTitle>FEATURES</SubTitle>
        <Title>As Seen On</Title>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s
          is reproduced below for those interested.
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
          et Malorum" by Cicero are also reproduced in their.
        </p>
        <hr 
          style={{width: "100%"}}
        />
        <FlexRow>
          <Brand
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Syngenta_Logo.svg/1280px-Syngenta_Logo.svg.png"
            alt="brand-logo"
          />
          <Brand
            src="https://1000logos.net/wp-content/uploads/2021/04/Fedex-logo.png"
            alt="brand-logo"
          />
          <Brand
            src="https://logos-download.com/wp-content/uploads/2016/02/Walmart_logo_transparent_png.png"
            alt="brand-logo"
          />
          <Brand
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="brand-logo"
          />
        </FlexRow>
        <hr 
          style={{width: "100%"}}
        />
      </FlexColumn>
      <FlexColumn
        style={{width: "80%"}}
      >
        <SubTitle>PRODUCTOS</SubTitle>
        <Title>Lo más vendido</Title>
        <FlexRow>
          {
            products.sort(() => Math.random() - 0.5).slice(-3).map(product => (
              <ProductCard
                stock={product.stock}
                key={product.id}
                brand={product.marca}
                image={product.photos[0].url}
                name={product.name}
                description={product.description}
                category={`${product.category_name} (${product.sub_category_name})`}
              />
            ))
          }
        </FlexRow>
        <Button
          onClick={() => navigate("/products")}
          style={{fontSize: "15px", marginTop: "1rem"}}
          color="#EE6B19"
        >
          Ver más productos
        </Button>
      </FlexColumn>
      <FlexColumn
        style={{width: "80%"}}
      >
        <FlexRow>
          <Info>
            <FaRegClock
              size="50px"
            />
            <InfoSection>
              <InfoText>Lunes a Sábado: 8AM - 6PM</InfoText>
              <InfoText>Domingos: 8AM - 12PM</InfoText>
            </InfoSection>
          </Info>
          <Info>
            <AiOutlinePhone 
              size="50px"
            />
            <InfoSection>
              <InfoText>+51 990849369</InfoText>
              <InfoText>+51 920524189</InfoText>
            </InfoSection>
          </Info>
          <Info>
            <FiMail 
              size="50px"
            />
            <InfoSection>
              <InfoText>inversionesaraujo@gmail.com</InfoText>
              <InfoText>mfchipana@gmail.com</InfoText>
            </InfoSection>
          </Info>
        </FlexRow>
        <Button
          style={{fontSize: "15px", marginTop: "1rem"}}
          color="#EE6B19"
        >
          <a
            rel="noreferrer"
            target="_blank"
            style={{textDecoration: "none", color: "white"}}
            href="mailto:inversionesaraujo2701@gmail.com?subject=Quiero%20mas%20informacion%20sobre%20sus%20productos"
          >
            Contáctanos
          </a>
        </Button>
      </FlexColumn>
    </>
  );
}

export default HomePage;
