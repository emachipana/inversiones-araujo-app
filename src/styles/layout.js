import styled from "@emotion/styled";
import { COLORS } from "./colors";

export const Text = styled.p`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 500};
  color: ${({ color }) => color || "inherit"};
  text-decoration: ${({ isLink }) => isLink ? "underline" : "none"};
  cursor: ${({ isLink }) => isLink ? "pointer" : "inherit"};
  text-align: ${({ align }) => align || "center"};
  transition: color .2s ease;

  &:hover {
    color: ${({ hColor, color }) => hColor || color};
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap || 0.5}rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: center;
  gap: ${({ gap }) => gap || 0.5}rem;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr;
  background-color: ${COLORS.smoke};
  position: relative;
  grid-template-areas: 
            "navbar navbar"
            "aside main";

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
