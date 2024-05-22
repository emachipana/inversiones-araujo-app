import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";
import { css } from "@emotion/react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin: 1rem auto;
  position: absolute;
  bottom: 0;
  right: 10px;
  margin-top: 2rem;
`;

export const Item = styled.div`
  padding: 0.5rem 0.68rem;
  height: 35px;
  border: 2px solid ${({ isActive }) => isActive ? COLORS.gray : COLORS.platinium};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: .3s ease-in;
  background-color: ${({ isActive }) => isActive ? COLORS.gray : "white"};
  color: ${({ isActive }) => isActive ? COLORS.white: COLORS.gray};

  &:hover {
    background-color: ${COLORS.gray};
    color: ${COLORS.white};
    border-color: ${COLORS.gray};
  }
`;

export const TextManager = css`
  @media screen and (max-width: 540px) {
    display: none;
  }
`;
