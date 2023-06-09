import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import fontsCss from "./fonts.module.css";
import { theme } from "./Theme";

const global = createGlobalStyle<{ isMounted: boolean; theme: typeof theme }>`
  ${normalize}
  ${fontsCss}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${(p) => p.theme.fonts.pretendard};
    background: ${(p) => p.theme.mainBackGround};
    color:${(p) => p.theme.textColor};
    transition: ${(p) => (p.isMounted ? ".3s all" : "none")};
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  li {
    list-style-type: none;
  }
  
  h1,
  h2,
  h3 {
    padding: 0;
    margin: 0;
  }
  
`;

export default global;
