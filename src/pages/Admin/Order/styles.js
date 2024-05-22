import styled from "@emotion/styled/macro";

export const Image = styled.img`
  min-width: 90px;
  max-width: 90px;
  height: 90px;
  object-fit: contain;
  mix-blend-mode: multiply;
  transition: .2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
