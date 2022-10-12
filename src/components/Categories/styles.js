import styled from "@emotion/styled";
import SimpleBar from "simplebar-react";
import { css } from "@emotion/react";

export const Container = styled.div`
  position: sticky;
  top: 85px;
  background-color: white;
  min-width: 280px;
  overflow: hidden;
  height: fit-content;
  border-radius: 1rem 1rem 0 0;
  margin: 2rem;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .3);
  padding: 1rem;
  z-index: 2;
  transition: .3s ease-in;

  @media screen and (max-width: 700px) {
    top: 85px;
    left: 15px;
    margin: 0;
    cursor: pointer;
    max-width: ${({ isOpen }) => isOpen ? 280 : 88}px;
    min-width: ${({ isOpen }) => isOpen ? 280 : 88}px;
    height: ${({ isOpen }) => isOpen ? "fit-content" : "46px"};
    position: fixed;
    border-radius: 1rem;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, .8);
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  margin: 0;

  @media screen and (max-width: 700px) {
    display: none
  }
`;

export const Card = styled.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? "150px" : "50px"};
  display: flex;
  flex-direction: column;
  transition: .3s ease-in;
  overflow: hidden;
`;

export const Section = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: fit-content;
  `;

export const Name = styled.p`
  font-size: 16.5px;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 50px;
  padding: 1rem;
  justify-content: space-between;
`;

export const CardBody = styled(SimpleBar)`
  width: 90%;
  margin: 0 auto;
  height: 100px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 700px) {  
    margin-top: 4px;
    width: ${({ isOpen }) => isOpen ? 60 : 100}%;
    padding: ${({ isOpen }) => isOpen ? "0 0.5rem" : 0};
  }
`;

export const Icon = css`
  display: none;
  font-size: 20px;
  position: relative;
  top: -2px;

  @media screen and (max-width: 700px) {  
    display: block;
  }
`;

export const Text = styled.span`
  font-size: 17px;
  font-weight: 600;
  display: none;

  @media screen and (max-width: 700px) {  
    display: block;
  }
`;
