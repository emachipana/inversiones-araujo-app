/** @jsxImportSource @emotion/react */
import { Autoplay, EffectCube } from "swiper";
import { Swiper, SwiperSlide,  } from "swiper/react";
import { SliderStyle } from "./styles";
import "swiper/css";
import "swiper/css/effect-cube";

function CubeSlider({ images }) {
  return (
      <Swiper
        css={SliderStyle}
        effect="cube"
        grabCursor
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }}
        modules={[EffectCube, Autoplay]}
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
}

export default CubeSlider;
