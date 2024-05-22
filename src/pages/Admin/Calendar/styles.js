import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const Info = styled.div`
  width: 260px;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, .2);
`;

export const Card = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 2px solid ${COLORS.platinium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: ${({ gap }) => gap || "0.2rem 0"};
`;

export const Day = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: .2s ease-in;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? COLORS.persian : "transparent"};
  color: ${({ isActive }) => isActive ? "white" : "inherit"};

  &:hover {
    background-color: ${({ day }) => day ? COLORS.persian : "transparent"};
    color: white;
  }
`;

export const Main = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, .2);
`;

export const Section = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  height: ${({ type }) => type === "day" ? "90px" : "auto"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
  background-color: ${({ bgColor }) => bgColor || COLORS.smoke};
  border-right: 2px solid ${COLORS.platinium};
  cursor: ${({ type }) => type === "day" ? "pointer" : "inherit"};
  border-bottom-color: ${({ current }) => current ? COLORS.persian : COLORS.platinium};
  border-bottom-width: ${({ current }) => current ? "4px" : "2px"};
  border-bottom-style: solid;
  gap: 0.5rem;
`;

export const Badge = styled.div`
  padding: 2px 4px;
  border-radius: 0.4rem;
  background-color: ${COLORS.persian};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px;

  @media screen and (max-width: 1500px) {
    max-width: 100px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 80px;
  }
`;
