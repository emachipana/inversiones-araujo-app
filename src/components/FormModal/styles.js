import styled from "@emotion/styled";

export const Section = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;

  @media screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: fit-content;
  max-height: 250px;
  object-fit: cover;
  transition: .3s ease-in;
  cursor: pointer;
  margin: 0 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  gap: 1rem;
`;
