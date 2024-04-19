import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  padding: 3px 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ status }) => status === "pending" ? COLORS.yellow : COLORS.emerald};
  color: ${COLORS.white};
`;
