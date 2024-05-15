import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Navigation = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .handler {
    @media screen and (max-width: 875px) {
      display: none;
    }
  }
`;

export const Num = styled.div `
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ isActive }) => isActive ? COLORS.gray : COLORS.taupe};
  transition: .2s ease-in;

  &:hover {
    background-color: ${COLORS.gray};
  }
`;  

export const Container = styled.div`
  width: 100%;
  height: ${({ height }) => height || "auto"};
  display: flex;
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "space-between;"};
  padding: 0 2rem;
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 995px) {
    flex-wrap: wrap;
  }
`;

export const Section = styled.section`
  width: ${({ width }) => width || 50}%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ gap }) => gap || 2}rem;
  position: sticky;
  top: 160px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  padding: ${({ padding }) => padding || 0};
  border-radius: 0.5rem;

  @media screen and (max-width: 990px) {
    width: 100%;
    position: relative;
    top: 0;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  tr {
    border-bottom: 1px solid ${COLORS.taupe};
  }

  td {
    padding: 0.5rem;
    text-align: start;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: ${({ withoutBorder }) => !withoutBorder && `1px solid ${COLORS.taupe}`};
`;

export const Options = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: -0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: 875px) {
    display: ${({ isActive }) => isActive ? "flex" : "none"};
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`;

export const FormSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
