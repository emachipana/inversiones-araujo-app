import styled from "@emotion/styled/macro";

export const Container = styled.div`
  width: 70%;
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, .2);
`;

export const Logo = styled.img`
  width: 180px;
  object-fit: cover;
  transition: transform .3s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Section = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  ${({ isImage }) => isImage && `
    background-image: url(/img/slider.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `}
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
`;
