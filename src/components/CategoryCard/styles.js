import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SimpleBar from 'simplebar-react';

export const Container = styled.div`
  width: 250px;
  height: ${({ isOpen, noSub }) => isOpen ? (noSub ? 200 : 300) : 50}px;
  transition: .3s ease-in;
  background-color: #F8F8F8;
  border-radius: 1rem 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, .2);
`;

export const Section = styled.div`
  height: fit-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: ${({ isTitle }) => isTitle ? 100 : 95 }%;
  padding: ${({ isTitle }) => isTitle ? "0.2rem" : "0.4rem" } 0.5rem;
  margin: ${({ isTitle }) => isTitle ? 0 : "1.5em auto" };
  background-color: ${({ isTitle }) => isTitle ? "transparent" : "white" };
  box-shadow: ${({ isTitle }) => isTitle ? "none" : "0px 0px 4px 2px rgba(0, 0, 0, .2)" };
  border-radius: 0.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: 700;
`

export const IconStyle = css`
  font-size: 19px;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
`;  

export const SubCategories = styled(SimpleBar)`
  height: 180px;
  width: 100%;
  margin: 1rem 0;
`;
