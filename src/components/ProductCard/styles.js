import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 220px;
  height: 320px;
  border: 1px solid ${COLORS.taupe};
  border-radius: 1rem;
  cursor: pointer;
  transition: transform .3s ease-out;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0.5rem 1rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  cursor: pointer;
  object-fit: contain;
  transition: transform .3s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Description = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.4rem;
`;

export const Name = styled.h4`
  font-size: 1rem;
  line-height: 19px;
  height: 40px;
  overflow: hidden;
`;