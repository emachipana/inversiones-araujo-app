import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const CartItems = styled.div`
  width: 250px;
  height: 380px;
  padding: 1.8rem 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Products = styled.div`
  height: 58%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  overflow: auto;
  padding: 0 0.8rem 0 0;
  box-shadow: ${({ items }) => items.length >= 3 ? "inset 0 -12px 10px -12px rgba(0, 0, 0, 0.5)" : "none"};
`;

export const Section = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-direction: column;
`;

export const Product = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  position: relative;
  border-bottom: 1px solid ${COLORS.platinium};
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  mix-blend-mode: multiply;
`;
