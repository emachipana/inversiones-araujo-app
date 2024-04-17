import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.8rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1350px) {
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 460px;
  height: 330px;
  position: relative;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .handle {
    cursor: pointer;
    font-size: 1.8rem;
    color: ${COLORS.taupe};
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    transition: color .2s ease-in-out;

    &:hover {
      color: ${COLORS.dim};
    }
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
`;

export const Info = styled.section`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center,
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 1350px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: 540px) {
    justify-content: center;
  }
`;
