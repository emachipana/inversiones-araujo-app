import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";
import SimpleBar from 'simplebar-react';

export const Container = styled.nav`
  background-color: rgba(255, 255, 255, .9);
  display: flex;
  max-height: 50px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding: 0.4rem;
  padding-left: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  border-bottom-left-radius: 25px;
  z-index: 2;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const User = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 520px) {
    width: 30px;
    height: 30px;
  }
`;

export const Name = styled.span`
  font-size: 1rem;
  font-familiy: ${fonts.secondary};
  font-weight: 700;
  color: ${colors.gray.normal};

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const Bell = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Point = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 8px;
  right: 13px;
`;

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: white;
  width: 240px;
  height: 280px;
  border-radius: 0.5rem;
  position: fixed;
  top: 55px;
  right: 6vw;
  transition: .2s ease-in;
  opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
  pointer-events: ${({ isOpen }) => isOpen ? "inherit" : "none"};
`;

export const Section = styled(SimpleBar)`
  height: 80%;
  width: 100%;
  margin: 1rem auto;
`;

export const Notification = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-top: 1px solid #A1A1A1;
  cursor: pointer;
  transition: .2s linear;

  &:hover {
    background-color: #ECFEE2;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  font-family: ${fonts.secondary};
  color: #757575;
`;
