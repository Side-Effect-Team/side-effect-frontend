import styled from "styled-components";
import { media } from "@/styles/media";

export const Wrapper = styled.div`
  ${media.mobile} {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  display: none;
`;
