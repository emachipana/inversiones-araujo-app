import { useNavigate } from "react-router-dom";
import { colors } from "../../styles";
import Button from "../Button";
import CubeSlider from "../CubeSlider";
import { Banner, Section, Text } from "./styles";

function Hero() {
  const navigate = useNavigate();

  const images = [
    {
      alt: "",
      src: "https://swiperjs.com/demos/images/nature-7.jpg"
    },
    {
      alt: "",
      src: "https://swiperjs.com/demos/images/nature-6.jpg"
    },
    {
      alt: "",
      src: "https://swiperjs.com/demos/images/nature-10.jpg"
    },
    {
      alt: "",
      src: "https://swiperjs.com/demos/images/nature-5.jpg"
    }
  ]

  return (
    <Banner>
      <Section>
        <Text>
          Los mejores <span style={{color: colors.green.normal}}>productos</span> a tu alcance.
        </Text>
        <Button onClick={() => navigate("/products")}>
          COTIZAR
        </Button>
      </Section>
      <CubeSlider 
        images={images}
      />
    </Banner>
  );
}

export default Hero;
