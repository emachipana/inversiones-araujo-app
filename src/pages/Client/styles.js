import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Title = styled.h1`
  font-size: ${({ size }) => size || 2.2}rem;
  text-align: ${({ align }) => align || "center"};
  font-weight: 800;
  color: ${({ color }) => color || COLORS.gray};
`;