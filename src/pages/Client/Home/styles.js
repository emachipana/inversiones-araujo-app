import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";
import { css } from "@emotion/react";

export const Categories = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "space-between"};
  flex-wrap: wrap;
  gap: ${({ gap }) => gap || 2}rem;
  margin: 2rem 0;

  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`;

export const Category = styled.div`
  width: 290px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  border: 1px solid ${COLORS.taupe};
  cursor: pointer;
  transition: transform .3s ease-out;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const Description = styled.section`
  width: 100%;
  height: 45%;
  padding: 0.8rem;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  text-align: start;
  font-weight: 700;
  margin-bottom: 5px;
  line-height: 22px;
`;

export const Services = styled.div`
  width: 100%;
  padding: 3rem;
  margin: 2rem 0 0 0;
  display: flex;
  align-items: flex-start;;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  background-color: ${COLORS.smoke};
`;

export const Service = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const Info = styled.section`
  width: 100%;
  height: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/slider.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 90%;
`;

export const Contact = styled.div`
  width: 100%;
  height: 320px;
  background-image: linear-gradient(rgba(32, 32, 32, 0.8), rgba(32, 32, 32, 0.8)), url("/img/business.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const TextManager = css`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
