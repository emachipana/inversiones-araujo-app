import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export const Section = styled.div`
  width: 40vw;
  height: 100vh;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;

  @media screen and (max-width: 880px) {
    width: 100%;
    margin: 0 1rem;
    padding: 2rem;
  }
`;

export const Banner = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 60vw;
  
  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const FixedContainer = styled.div`
  display: ${({ location }) => location === "/login" ? "none" : "flex"};
  align-items: center;
  grid-template-columns: 1fr 65px;
  position: fixed;
  bottom: 20px;
  left: ${({ whatsapp }) => whatsapp ? "none" : "20px"};
  right: ${({ whatsapp }) => !whatsapp ? "none" : "20px"};
  transition: .2s ease-in;
  z-index: 4;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.a`
  min-width: 62px;
  height: 62px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ whatsapp }) => whatsapp ? "#5DDE5D" : "#0356fc"};
  color: white;
  z-index: 6;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 700px) {  
    min-width: 50px;
    height: 50px;
  }
`;

export const PopMessage = styled.div`
  width: 85px;
  border-radius: 0 0.5rem 0.5rem 0;
  height: 40px;
  background-color: #2b6ced;
  position: relative;
  left: -10px;
  color: white;
  padding: 0.5rem 0.25rem 0.5rem 14px;
  font-size: 18px;
  font-weight: 700;

  @media screen and (max-width: 700px) {  
    width: 70px;
    height: 35px;
    font-size: 1rem;
    padding: 0.4rem 0.5rem 0 12px;
  }
`;

export const IconStyle = css`
  font-size: 35px;

  @media screen and (max-width: 700px) {  
    font-size: 28px;
  }
`; 

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem auto;
  font-family: ${fonts.secondary};
  text-align: center;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  color: ${colors.green.normal};
  font-weight: 800;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.green.extrabold};
`;

export const FlexRow = styled.div`
  display: flex;
  margin: 1.5rem 0;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
`;

export const Brand = styled.img`
  width: fit-content;
  height: 40px;
  object-fit: cover;
  transition: .3s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Info = styled.div`
  width: 268px;
  height: 160px;
  border-radius: 1rem;
  background-color: rgba(63, 169, 90, .8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  color: white;
  justify-content: center;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, .2);
  transition: .3s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const InfoText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
