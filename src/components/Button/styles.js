import styled from "@emotion/styled";
import { COLORS, FONT } from "../../styles";

export const Container = styled.button`
  border: none;
  font-family: ${FONT.primary};
  color: ${COLORS.white};
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => color.background};
  font-size: ${({ fontSize }) => fontSize || 18}px;
  font-weight: 700;
  width: ${({ size }) => size === "full" ? "100%" : "auto"};
  border-radius: 10px;
  cursor: pointer;
  transition: .3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ color }) => color.hover};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .8;
  }
`;
