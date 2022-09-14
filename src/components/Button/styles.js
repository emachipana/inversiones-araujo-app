import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.button`
  font-size: ${({ fontSize }) => fontSize ? fontSize : "1rem"};
  background-color: ${colors.green.normal};
  color: ${colors.white};
  padding: 0.4rem 0.8rem;
  display: flex;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 1.25px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .2);
  border-radius: 0.5rem;
  width: ${({ block }) => block ? block : "fit-content"};
  transition: .2s linear;

  &:hover {
    background-color: ${colors.green.bold};
    transform: scale(1.04);
  }
`;
