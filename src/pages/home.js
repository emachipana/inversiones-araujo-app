import CubeSlider from "../components/CubeSlider";
import { LandingBanner } from "./styles";

function HomePage() {
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
    <LandingBanner>
      <CubeSlider 
        images={images}
      />
    </LandingBanner>
  );
}

export default HomePage;
