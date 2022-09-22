import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0 0.5rem;
  position: sticky;
  background-color: ${colors.green.normal};
  top: 0;
  height: 100vh;
  width: ${({ isOpen }) => isOpen ? "195px" : "70px"};
  overflow: hidden;
  transition: .3s ease-in;
  
  @media screen and (max-width: 520px) {
    display: block;    
    position: ${({ isOpen }) => isOpen ? "fixed" : "sticky"};
    height: ${({ isOpen }) => isOpen ? "100%" : "60px"};
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
  color: ${({ location, path }) => location === path ? colors.green.normal : "white" };
  font-size: 1rem;
  position: absolute;
  left: 3.8rem;
  top: 1.1rem;
  font-weight: 800;
  font-family: ${fonts.secondary};
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

  ${({ location, path }) => location === path ?
  `
    background-color: ${colors.gray.light};

    &::before {
      content: '';
      position: absolute;
      right: 0;  
      top: -50px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 35px 35px 0 10px ${colors.gray.light};
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -50px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 35px -35px 0 10px ${colors.gray.light};
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
  left: 0.8rem;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 3rem 0; 
`;
