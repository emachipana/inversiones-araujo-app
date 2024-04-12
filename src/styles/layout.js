import styled from "@emotion/styled";

export const Text = styled.p`
  font-size: ${({ size }) => size || 16}px;
  font-weight: ${({ weight }) => weight || 500};
  color: ${({ color }) => color || "inherit"};
  text-decoration: ${({ isLink }) => isLink ? "underline" : "none"};
  cursor: ${({ isLink }) => isLink ? "pointer" : "inherit"};
  text-align: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap || 0.5}rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ gap }) => gap || 0.5}rem;
`;
