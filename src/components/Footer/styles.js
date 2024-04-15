import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.section`
  width: 100%;
  min-height: 290px;
  background-color: ${COLORS.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  gap: 10rem;

  @media screen and (max-width: 750px) {
    justify-content: center;
    padding: 2rem;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  height: 110px;
  object-fit: cover;
  cursor: pointer;
  transition: transform .3s ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h5`
  font-size: 19px;
  font-weight: 700;
  color: ${COLORS.white};
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
`;
