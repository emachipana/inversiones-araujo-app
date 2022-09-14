import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Section = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;

  @media screen and (max-width: 720px) {
    width: 100%;
    margin: 0 1rem;
  }
`;

export const Banner = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 50vw;
  
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
