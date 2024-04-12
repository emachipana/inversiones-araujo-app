import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 250px;
  min-height: 200px;
  position: absolute;
  background-color: ${COLORS.white};
  border-radius: 10px;
  top: 140%;
  right: -100%;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, .3);
  z-index: 45;
`;
