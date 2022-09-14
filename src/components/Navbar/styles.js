import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.white};
  max-height: 70px;
  min-height: 66px;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;

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
      background-color: ${colors.white};
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
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  font-size: 17px;
  font-weight: 800;
  color: ${colors.gray.normal};
  padding: 0 0.2rem;
  margin: 0 0.3rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: .3s ease-in;
  &:hover {
    border-bottom: 2px solid ${colors.green};
    color: ${colors.gray.normal};
  }
`;

export const ButtonStyle = css`
  background-color: ${colors.green};
  border: none;
  font-weight: 800;
  font-size: 15px;
  color: ${colors.white};
  letter-spacing: 1.25px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, .2);
`;

export const activeStyle = ({ isActive }) => (
  isActive ? { borderBottom: `2px solid ${colors.green}` } : undefined
);

export const Icon = css`
  font-size: 30px;
  cursor: pointer;
`;
