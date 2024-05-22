import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 220px;
  height: 320px;
  border: 1px solid ${COLORS.platinium};
  border-radius: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0.3rem 0.8rem 0.5rem 0.8rem;
  background-color: white;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 48%;
  cursor: pointer;
  object-fit: contain;
  transition: transform .3s ease-out;
  mix-blend-mode: multiply;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Description = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const Name = styled.h4`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 17px;
  max-width: 180px;
  overflow: hidden;
`;

export const Discount = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .95);
  position: absolute;
  left: 12px;
  top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.taupe};
  line-height: 13px;
`;
