import styled from "@emotion/styled";
import { COLORS } from "../../styles";
import { css } from "@emotion/react";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 51;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, .5);
  animation: modal .4s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @keyframes modal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Section = styled.section`
  padding: 1rem;
  width: ${({ size }) => size === "lg" ? 750 : 400}px;
  min-height: 300px;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 1rem;
  z-index: 70;

  animation: move .5s ease;

  @keyframes move {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Close = css`
  font-size: 28px;
  color: ${COLORS.gray};
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
