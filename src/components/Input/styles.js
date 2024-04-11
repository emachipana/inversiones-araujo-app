import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ size }) => size || 16}px;
  font-weight: 500;
  text-align: start;
`;

export const Section = styled.section`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.3rem 0.7rem;
  outline: 1px solid  ${({ focused, error }) => error ? COLORS.red : (focused ? COLORS.persian : COLORS.gray)};
  border-radius: 0.5rem;
`;

export const Main = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  color: ${COLORS.gray};

  &::placeholder {
    color: ${COLORS.taupe};
  }
`;

export const TextError = styled.p`
  font-size: 15px;
  padding: 2px 6px;
  font-weight: 600;
  color: ${COLORS.white};
  position: absolute;;
  bottom: -32px;
  border-radius: 4px;
  left: 5px;
  background-color: ${COLORS.red};
  opacity: .85;
`;
