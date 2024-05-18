import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, .3);
  border-radius: 0.6rem;
  padding: ${({ withPadding }) => withPadding ? "1rem 2rem" : 0};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;

  th, td {
    padding: 6px;
    border: 1px solid ${COLORS.platinium};
    border-left: none;
  }

  td:last-child, th:last-child {
    border-right: none;
  }

  tr:first-of-type th {
    border-top: none;
  }

  tr:last-of-type td {
    border-bottom: none;
  }
`;
