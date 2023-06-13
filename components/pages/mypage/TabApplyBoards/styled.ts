import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const ApplyBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${media.mobile} {
    margin-top: 4rem;
    padding: 0 1rem;
  }
`;
