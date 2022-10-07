import styled from "@emotion/styled";

export const Section = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
  }
`;
