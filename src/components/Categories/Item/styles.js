import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  height: ${({ height }) => height || 30}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.2rem;
  margin-top: -9px;
  cursor: pointer;
  border-bottom: 1px solid ${COLORS.taupe};
  padding: 0.2rem 0;
  transition: height .3s ease-in;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0.5rem;
  gap: 0.8rem;
  transition: .3s ease-in;
`;
