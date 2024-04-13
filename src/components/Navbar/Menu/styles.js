import styled from "@emotion/styled";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 200px;
  height: auto;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const Item = styled.div`
  padding: 0.5rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  transition: .3s ease-in;
  background-color: ${({ isActive }) => isActive ? COLORS.persian : "transparent"};
  color: ${({ isActive }) => isActive ? COLORS.white : "inherit"};

  &:hover {
    background-color: ${COLORS.persian};
    color: ${COLORS.white};
  }
`;

export const Line = styled.hr`
  margin-top: 2px;
  border: 2px solid ${COLORS.persian};
  width: ${({ width }) => width || 40}%;
  position: absolute;
`;
