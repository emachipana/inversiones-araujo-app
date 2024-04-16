import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Section = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: ${({ align }) => align || "flex-end"};
  justify-content: ${({ justify }) => justify || "space-between"};
  padding: ${({ padding }) => padding || "2rem 5rem"};
  gap: ${({ gap }) => gap || 2}rem;
  flex-wrap: wrap;

  .persian {
    color: ${COLORS.persian};
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const Image = styled.img`
  width: 350px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`;

export const Val = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;
