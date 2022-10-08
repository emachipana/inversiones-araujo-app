import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0 0.5rem;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: ${colors.green.normal};
  width: ${({ isOpen }) => isOpen ? "220px" : "73px"};
  overflow: hidden;
  height: 100vh;
  transition: .3s ease-in;
  
  @media screen and (max-width: 520px) {
    display: block;
    position: fixed;
    height: ${({ isOpen }) => isOpen ? "100vh" : "60px"};
    width: ${({ isOpen }) => isOpen ? "195px" : "60px"};
    border-bottom-right-radius: ${({ isOpen }) => isOpen ? "0px" : "30px"};
  }
`;

export const IconStyle = css`
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  transition: .3s ease-in;
`;

export const Text = styled.h2`
  color: ${({ location, path }) => location.includes(path) ? colors.green.normal : "white" };
  font-size: 1rem;
  position: absolute;
  left: 3.8rem;
  top: 1.1rem;
  font-weight: 800;
  font-family: ${fonts.secondary};

  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  position: relative;

  ${({ location, path }) => location.includes(path) ?
  `
    background-color: ${colors.gray.light};

    &::before {
      content: '';
      position: absolute;
      right: 0;  
      top: -45px;
      width: 45px;
      height: 45px;
      border-radius: 45%;
      box-shadow: 30px 30px 0 10px ${colors.gray.light};
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -45px;
      width: 45px;
      height: 45px;
      border-radius: 45%;
      box-shadow: 30px -30px 0 10px ${colors.gray.light};
    }
  `
  :
  ""
  }
`;

export const IconNavBar = css`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0.7rem;

  @media screen and (max-width: 520px) {
    width: 25px;
    height: 25px;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin: 2.6rem 0;

  @media screen and (max-width: 520px) {
    gap: 1.2rem;
    margin: 2.5rem 0;
  }
`;
