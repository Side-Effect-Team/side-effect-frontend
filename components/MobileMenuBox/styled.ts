import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";

export const Wrapper = styled.div`
  ${mediaQuery("mobile")`
    cursor: pointer;
    display: flex;
    justify-contents: center;
    align-items: center;
    gap: 1rem;
  `}

  display: none;

  /* svg {
    transform: scale(1.5);
    margin: auto;
  } */

  /* &:hover {
    opacity: 0.6;
  } */
`;
