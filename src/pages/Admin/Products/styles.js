import styled from "@emotion/styled/macro";

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 1072px) {
    justify-content: center;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap || 1}rem;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
