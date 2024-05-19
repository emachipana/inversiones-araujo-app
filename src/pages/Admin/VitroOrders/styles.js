import styled from "@emotion/styled/macro";

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
