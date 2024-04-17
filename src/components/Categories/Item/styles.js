import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";


export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  margin-top: -9px;
  cursor: pointer;
  transition: .3s ease-out;
  color: ${({ isActive }) => isActive ? COLORS.persian : COLORS.gray};

  &:hover {
    color: ${COLORS.persian}
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.hr`
  width: 100%;
  background-color: ${COLORS.taupe};
`;
