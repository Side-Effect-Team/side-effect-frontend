import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import fontsCss from "./fonts.module.css";

const global = createGlobalStyle`
  ${normalize}
  ${fontsCss}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    overflow: hidden;
    
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default global;
