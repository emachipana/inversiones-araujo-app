import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Title = styled.h1`
  font-size: ${({ size }) => size || 2}rem;
  color: ${({ color }) => color || COLORS.gray};
  font-weight: 800;
`;
