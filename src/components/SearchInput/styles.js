import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Container = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 45px;
  box-shadow: 0px 2px 2px 3px rgba(0, 0, 0, .2);
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid #949392;
  background-color: white;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-famly: ${fonts.secondary};
  font-weight: 600;
  font-size: 15px;
  height: 100%;
  width: 80%;
`;

export const Icon = css`
  width: 15%;
  color: ${colors.gray.bold};
  margin: 0;
  font-size: 18px;
`;
