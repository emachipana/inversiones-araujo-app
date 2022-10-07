import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.div`
  width: 240px;
  height: fit-content;
  background-color: #FFFFFF;
  border-radius: 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5rem;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: fit-content;
  max-height: 220px;
  object-fit: cover;
  transition: .3s linear;
  cursor: pointer;
  margin: auto;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.h2`
  font-size: ${({ brand }) => brand ? 13 : 16}px;
  color: ${({ brand }) => brand ? "#837676" : colors.gray.bold};
  text-transform: ${({ brand }) => brand ? "uppercase" : "none"};
  font-weight: 700;
  margin: 0;
  font-family: ${fonts.secondary};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 1rem;
  color: #707070;
`;
