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
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .3);

  .handler {
    @media screen and (max-width: 810px) {
      display: none;
    }
  }

  .activer {
    @media screen and (min-width: 810px) {
      display: none;
    }
  }
`;

export const Info = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  height: 75px;

  @media screen and (max-width: 540px) {
    padding: 0.8rem 1.5rem;
  }
`;

export const Logo = styled.img`
  height: 70px;
  object-fit: cover;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 45px;
  background-color: ${COLORS.smoke};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
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
