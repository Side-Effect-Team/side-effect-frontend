import styled from "styled-components";
import { breakPoints } from "@/styles/Media";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.mainBackGround};
`;

export const Contents = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: ${breakPoints.desktop}px;
`;
