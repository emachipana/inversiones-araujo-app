import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  position: relative;
  width: 300px;
`;

export const Section = styled.section`
  min-height: 150px;
  max-height: 300px;
  width: 450px;
  position: absolute;
  background-color: ${COLORS.white};
  border-radius: 10px;
  top: 120%;
  right: -25%;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, .3);
  z-index: 46;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justify }) => justify || "start"};
`;

export const Product = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${COLORS.platinium};
  padding: 0.3rem 0;
  gap: 1rem;
  cursor: pointer;
  transition: background-color .3s ease;
  border-radius: 0.5rem;

  &:hover {
    background-color: #EBEBEB;
  }
`;

export const Img = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
`;
