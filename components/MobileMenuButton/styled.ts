import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";

export const Wrapper = styled.div`
  ${mediaQuery("mobile")`
    width: 30px;
    height: 30px;
    border: 2px solid black;
    cursor: pointer;
    display: flex;
    justify-contents: center;
    align-items: center;
    background: #eee;
  `}

  display: none;

  > svg {
    transform: scale(1.5);
    margin: auto;
  }

  &:hover {
    opacity: 0.6;
  }
`;
