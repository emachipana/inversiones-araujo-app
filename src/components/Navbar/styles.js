import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ isMove, location }) => isMove ? "rgba(255, 255, 255, .9)" : location === "/" ? "transparent" : "rgba(255, 255, 255, .9)"};
  max-height: 70px;
  min-height: 66px;
  display: ${({ location }) => location === "/login" ? "none" : "flex"};
  z-index: 5;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
  position: ${({ location }) => location === "/" ? "fixed" : "sticky"};
  top: 0;
  transition: .3s ease-in;
  box-shadow: ${({ isMove, location }) => isMove ? "0px 0px 2px 4px rgba(0, 0, 0, .3)" : location === "/" ? "none" : "0px 0px 2px 4px rgba(0, 0, 0, .3)"};

  .handle {
    display: none;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 520px) {
    background-color: ${({ isOpen, isMove, location }) => ( isOpen || isMove ) ? "rgba(255, 255, 255, .9)" : location === "/" ? "transparent" : "rgba(255, 255, 255, .9)"};
    box-shadow: none;

    .nav {
      position: fixed;
      left: -100%;
      top: 66px;
      align-items: center;
      flex-direction: column;
      gap: 12%;
      width: 100%;
      height: 100vh;
      z-index: 10;
      transition: .3s ease-in;
      background-color: rgba(255, 255, 255, .9);
      padding: 1rem;
    }

    .handle {
      display: block;
    }

    .nav.active {
      left: 0;
    }
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const colorItem = (props) => ( props.isOpen || props.isMove ) ? colors.gray.normal : props.location === "/" ? colors.white : colors.gray.normal;

export const NavItem = styled.a`
  text-decoration: none;
  font-size: 17px;
  font-weight: 800;
  color: ${(props) => colorItem(props)};
  padding: 0 0.2rem;
  margin: 0 0.3rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .3s ease-in;
  border-bottom: 2px solid ${({ to, location }) => to === location ? colors.green.extrabold : "transparent"};
  &:hover {
    border-bottom: 2px solid ${colors.green.extrabold};
    color: ${(props) => colorItem(props)};
  }
`;

export const Icon = css`
  font-size: 30px;
  cursor: pointer;
`;
