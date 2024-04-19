import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 315px;
  height: 180px;
  border-radius: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/img/slider.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 55%;
  border-radius: 1rem;
  background-color: ${COLORS.persian};
  opacity: .9;
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const Section = styled.section`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
