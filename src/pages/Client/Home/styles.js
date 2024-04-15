import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Categories = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;

  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`;

export const Category = styled.div`
  width: 290px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  border: 1px solid ${COLORS.taupe};
  cursor: pointer;
  transition: transform .3s ease-out;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 55%;
  object-fit: cover;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const Description = styled.section`
  width: 100%;
  height: 45%;
  padding: 0.8rem;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  text-align: start;
  font-weight: 700;
  margin-bottom: 5px;
`;
