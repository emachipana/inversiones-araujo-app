import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Item = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isNumber }) => isNumber ? "white" : COLORS.gray};
  cursor: ${({ isNumber }) => isNumber ? "inherit" : "pointer"};
  border: ${({ isNumber }) => isNumber ? `1px solid ${COLORS.taupe}` : "none"};
`;
