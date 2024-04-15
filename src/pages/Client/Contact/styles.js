import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    padding: 2rem;
  }

  .persian {
    color: ${COLORS.persian};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.2rem;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid ${COLORS.taupe};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin: 2rem 0;
  
  .input {
    width: 292px;
  }

  @media screen and (max-width: 680px) {
    .input {
      width: 100%;
    }
  }
`;  

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 680px) {
    gap: 2rem;
  }
`;

export const Section = styled.section`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`
