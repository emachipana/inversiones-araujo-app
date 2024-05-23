import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify || "space-evenly"};
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 1072px) {
    justify-content: center;
  }
`;

export const Filter = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background-color: ${({ isActive }) => isActive ? COLORS.persian : "white"};
  color: ${({ isActive }) => isActive ? "white" : COLORS.dim};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.persian};
    color: white;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
