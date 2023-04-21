import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const global = createGlobalStyle`
  ${normalize}
  // 프리텐다드 글꼴 기본 설정

  
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default global;
