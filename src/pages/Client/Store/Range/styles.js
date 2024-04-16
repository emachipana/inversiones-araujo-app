import styled from "@emotion/styled/macro";
import { COLORS } from "../../../../styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.2rem;

  .rc-slider-track {
    background-color: ${COLORS.taupe};
    height: 10px;
    width: 90%;
  }

  .rc-slider-rail {
    background-color: ${COLORS.platinium};
    height: 10px;
  }

  .rc-slider-handle {
    background-color: ${COLORS.taupe};
    height: 16px;
    width: 16px;
    border-color: ${COLORS.taupe};
    opacity: 1;
    top: 6px;
    box-shadow: 0px 0px 0px 0px ${COLORS.taupe};

    &:hover {
      border-color: ${COLORS.taupe};
    }

    &:active {
      border: none;
      box-shadow: none;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
