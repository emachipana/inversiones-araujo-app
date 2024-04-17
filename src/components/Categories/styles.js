import styled from "@emotion/styled/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  position: sticky;
  top: 160px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
