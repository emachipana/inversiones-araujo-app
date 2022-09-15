import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors, fonts } from "../../styles";

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 3rem;
  margin: 1rem;
  width: 100%;
  height: fit-content;
  background-color: ${colors.white};
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0 ,0, .2);
`;

export const LabelStyle = css`
  font-family: ${fonts.secondary};
  font-size: 14px;
  font-weight: 600;
`;

export const InputStyle = css`
  font-family: ${fonts.secondary};
  font-size: 14px;

  &:focus {
    box-shadow: 0px 0px 2px 4px rgba(0, 200, 0, .4);
  }
`;

export const AlertStyles = css`
  font-family: ${fonts.secondary};
  text-align: center;
  font-size: 14.5px;
  font-weight: 400;
`;
