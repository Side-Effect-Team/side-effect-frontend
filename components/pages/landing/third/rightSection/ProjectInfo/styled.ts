import styled from "styled-components";
import { media } from "@/styles/mediatest";
export const ProjectInfoWrapper = styled.div`
  flex: 5;
  ${media.mobile} {
    flex: 4;
  }
`;
export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
