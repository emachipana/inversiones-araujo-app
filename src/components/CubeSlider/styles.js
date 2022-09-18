import { css } from "@emotion/react";

export const SliderStyle = css`
  max-width: 300px;
  position: relative;
  left: -20%;
  top: 30%;

  @media screen and (max-width: 620px) {
    max-width: 250px;
    top: 15%;
    left: 0;
  }

  .swiper-slide img {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
