import styled from "styled-components";
import { media } from "@/styles/media";
export const SectionContainer = styled.section`
  height: calc(100vh - 75px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  overflow: hidden;
  :nth-child(even) {
    background-color: ${(p) => p.theme.landingPageColor};
  }
  ${media.mobile} {
    flex-direction: column;
  }
`;
