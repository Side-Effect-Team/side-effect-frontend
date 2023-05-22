import styled from "styled-components";
import { media } from "@/styles/mediatest";
export const NoDataWrapper = styled.div`
  min-height: 600px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
export const NoDataContent = styled.p`
  font-size: xx-large;
  font-weight: bolder;
  ${media.mobile} {
    margin: 0;
    font-size: x-large;
  }
`;
