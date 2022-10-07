import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 1rem;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px
`;

export const SearchContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 1rem;

  @media screen and (max-width: 720px) {
    justify-content: center;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
