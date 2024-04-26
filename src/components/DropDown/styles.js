import styled from "@emotion/styled";
import { COLORS } from "../../styles";

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  min-height: 200px;
  position: absolute;
  background-color: ${COLORS.white};
  border-radius: 10px;
  top: 100%;
  right: -75%;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, .3);
  z-index: 45;
`;
