import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Title = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 800;
  color: ${({ color }) => color || COLORS.gray};
`;