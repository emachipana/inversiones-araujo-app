import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  background-color: ${colors.gray.bold};
  height: 150px;
  width: 100%;
  display: ${({ location }) => location === "/" ? "block" : "none"};
`;
