import { createGlobalStyle } from "styled-components";

export const colors = {
  yellow: "#FFDD00",
  black: "#000000",
  gray: "#D9D9D9",
  white: "#ffffff",

  chart: {
    red: "#E56E25",
    orange: "#F18A1F",
    blue: "#3BA3D2",
    green: "#4EB966",
    yellow: "#EFB119",
  },
};

export const GlobalStyle = createGlobalStyle`
  .App {
    position: absolute;
    width: 100%;
    min-height: 100%;
    background-color: ${colors.yellow};

    main {
      padding: 30px;
      max-width: 100vw;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
