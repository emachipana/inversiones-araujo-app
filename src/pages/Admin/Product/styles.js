import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

export const Section = styled.section`
  width: 100%;
  // height: 300px;
  background-color: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "space-between"};
  gap: ${({ gap }) => gap || 1}rem;
`;

export const ImageCard = styled.div`
  width: 180px;
  height: 200px;
  border-radius: 1rem;
  border: 2px dotted ${COLORS.taupe};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: .3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;
