import { css } from "@emotion/react";

export const SliderStyle = css`
  max-width: 350px;
  margin: 0;

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 720px) {
    max-width: 280px;
  }
`;
