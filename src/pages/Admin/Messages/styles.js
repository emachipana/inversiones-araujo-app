import styled from "@emotion/styled/macro";
import { COLORS } from "../../../styles";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  td {
    padding: 0.5rem 0;
    border-bottom: 1px solid ${COLORS.platinium};
  }
`;

export const ModalSection = styled.div`
  width: 100%;
  height: 100%;
  // padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
