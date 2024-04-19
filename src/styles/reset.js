import { css } from "@emotion/react";
import { FONT } from "./font";
import { COLORS } from "./colors";

export const RESET = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${FONT.primary};
    color: ${COLORS.gray};
    font-size: 1rem;
  }

  // styling scrollbar

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.dim};
    border-radius: 6px;
  }
`;
