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

  body {
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
