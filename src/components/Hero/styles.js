import styled from "@emotion/styled";

export const Banner = styled.div`
background: url("img/landing-banner.jpg")rgba(0, 0, 0, 0.55);
background-blend-mode: darken;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
width: 100%;
height: 100vh;
display: flex;
gap: 1rem;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 5rem 1rem;
`;

export const Section = styled.div`
display: flex;
flex-direction: column;
align-items: start;
max-width: 720px;

@media screen and (max-width: 1120px) {
  align-items: center;
  text-align: center;
}
`;

export const Text = styled.h1`
letter-spacing: 2px;
font-size: 4.5rem;
font-weight: 900;
color: #C4C4C4;

@media screen and (max-width: 1120px) {
  font-size: 3.2rem;
}
`;
