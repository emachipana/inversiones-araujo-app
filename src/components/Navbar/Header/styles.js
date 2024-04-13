import styled from "@emotion/styled";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 13px 1rem;
  background-color: ${COLORS.persian};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

export const Handler = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap || 4}px;
  transition: .3s ease-out;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? COLORS.persian_hover : "transparent"};
  padding: 1rem 0.4rem;
  color: ${COLORS.white};
  font-size: 18px;

  &:hover {
    background-color: ${COLORS.persian_hover};
  }
`;
