import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Table = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;

  th, td {
    border: 1px solid ${COLORS.taupe};
    padding: 0.3rem;
  }
`;

export const Container = styled.div`
  overflow-x: auto;
  width: 780px;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: ${({ reverse }) => reverse ? "wrap-reverse" : "wrap"};
`;

export const Card = styled.div`
  width: 200px;
  height: 160px;
  color: white;
  border-radius: 1rem;
  background-color: ${({ bgColor }) => bgColor || COLORS.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .3);
  cursor: pointer;
  transition: .3s ease-in;

  &:hover {
    transform: translateY(-5px);
  }
`;
