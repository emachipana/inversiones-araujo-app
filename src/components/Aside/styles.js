import styled from "@emotion/styled/macro";

export const Container = styled.div`
  height: calc(100vh - 70px);
  width: 300px;
  background-color: white;
  padding: 1.5rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 50;
  transition: .3s ease-in;
  box-shadow: 0px 10px 12px 2px rgba(0, 0, 0, .2);
  grid-area: aside;
  position: sticky;
  top: 70px;

  @media screen and (max-width: 800px) {
    position: fixed;
    top: 0;
    height: 100vh;
    left: ${({ isOpen }) => isOpen ? "0" : "-300px"};
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  z-index: 45;
`;
