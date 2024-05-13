import styled from "@emotion/styled/macro";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 2.5rem;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    padding: 1.5rem 0.7rem;
  }
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1080px) {
    justify-content: center;
    gap: 1.5rem;
  }
`;
