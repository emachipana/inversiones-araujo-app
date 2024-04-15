import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/slider.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const IconStyle = css`
  animation-name: upDown;
  animation-duration: .5s;
  animation-direction: alternate;
  animation-iteration-count: 10;
  animation-timing-function: ease-out;

  @keyframes upDown {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

