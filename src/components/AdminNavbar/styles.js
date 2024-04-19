import styled from "@emotion/styled/macro";
import { COLORS } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${COLORS.persian};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  grid-area: navbar;
  position: sticky;
  top: 0;

  .handler {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .activer {
    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  @media screen and (max-width: 475px) {
    padding: 0.5rem;
  }
`;

export const Logo = styled.img`
  height: 35px;
  object-fit: cover;
  margin-top: -5px;

  @media screen and (max-width: 440px) {
    height: 20px;
  }
`;

export const Point = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${COLORS.red};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Notification = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
