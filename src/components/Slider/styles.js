import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS, FONT } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/slider.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${COLORS.white};

  @media screen and (max-width: 1130px) {
    height: auto;
  }
`;

export const IconStyle = css`
  font-size: 2.5rem;
  color: ${COLORS.white};
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: absolute;
  bottom: 1rem;
`;

export const Page = styled.div`
  width: 45px;
  height: 5px;
  background-color: ${({ isActive }) => isActive ? COLORS.white : "rgba(255, 255, 255, .5)"};
  border-radius: 2px;
  cursor: pointer;
  transition: .2s ease-in;

  &:hover {
    background-color: ${COLORS.white};
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  padding: 1rem 5rem;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1130px) {
    height: auto;
    justify-content: center;
  }

  @media screen and (max-width: 680px) {
    padding: 2rem 4rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 45%;

  @media screen and (max-width: 1130px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 75px;
  line-height: 100px;
  font-family: ${FONT.secondary};
  color: ${COLORS.white};
  text-transform: uppercase;

  .marked {
    color: ${COLORS.persian};
  }

  @media screen and (max-width: 600px) {
    font-size: 60px;
    line-height: 80px;
  }

  @media screen and (max-width: 500px) {
    font-size: 50px;
    line-height: 70px;
  }
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
