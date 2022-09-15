import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Section = styled.div`
  width: 40vw;
  height: 100vh;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;

  @media screen and (max-width: 880px) {
    width: 100%;
    margin: 0 1rem;
    padding: 2rem;
  }
`;

export const Banner = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 60vw;
  
  @media screen and (max-width: 880px) {
    display: none;
  }
`;
