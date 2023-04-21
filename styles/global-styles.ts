import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard-Regular";
    margin: 0;
    padding: 0;
  }
`;

export const theme = {
  colors: {
    primary: "#19A7CE",
    secondary: "#146C94",
    light: "#F6F1F1",
    dark: "#000",
  },
  viewport: {
    medium: "768px",
    large: "1200px",
  },
};

export default globalStyles;
