import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
