import styled from "@emotion/styled";
import { COLORS } from "../../styles";
import { css } from "@emotion/react";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .3);

  .handler {
    @media screen and (max-width: 810px) {
      display: none;
    }
  }

  .activer {
    @media screen and (min-width: 811px) {
      display: none;
    }
  }
`;

export const Info = styled.section`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "flex-end"};
  padding: 0.5rem 1rem;
  gap: 1rem;
  background-color: ${COLORS.gray};
`;

export const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 3rem;
  width: 100%;
  height: 70px;
  background-color: white;

  @media screen and (max-width: 540px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const Logo = styled.img`
  height: 68px;
  object-fit: cover;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 40px;
  background-color: ${COLORS.smoke};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;

  @media screen and (max-width: 810px) {
    height: 60px;
  }
`;

export const IconStyle = css`
  font-size: 30px;
  color: ${COLORS.dim};
  cursor: pointer;

  &:hover {
    color: ${COLORS.gray};
  }
`;

export const Cart = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const Counter = styled.div`
  padding: 4px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${({ color }) => color || COLORS.dim};
  top: -10px;
  right: -15px;
  overflow: hidden;

  &:hover {
    background-color: ${COLORS.dark};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const CartItems = styled.div`
  width: 250px;
  height: 380px;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = css`
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    color: ${COLORS.persian};
  }
`;

export const AsideList = styled.aside`
  width: 260px;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ isOpen }) => isOpen ? 0 : -260}px;
  transition: .3s ease-in;
  z-index: 59;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.7rem 1.6rem;
  gap: 1.7rem;
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100vh;
  z-index: 58;
`;

export const Close = css`
  position: absolute;
  font-size: 28px;
  top: 8px;
  right: 8px;
  cursor: pointer;
  color: ${COLORS.gray};
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 180px;
  margin-top: -1.2rem;
`;
