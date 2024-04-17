import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: ${({ isActive }) => isActive ? COLORS.persian : "white"};
  color: ${({ isActive }) => isActive ? COLORS.white : COLORS.dim};
  cursor: pointer;
  transition: .3s ease-in;
  border-radius: 12px;

  &:hover {
    background-color: ${COLORS.persian};
    color: ${COLORS.white};
  }
`;
