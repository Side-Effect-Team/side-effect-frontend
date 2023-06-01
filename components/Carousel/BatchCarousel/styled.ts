import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";

export const Wrapper = styled.div`
  margin: 1.5rem 0;
  padding: 1rem 5px;
  width: 100%;
  height: ${(p) => p.theme.height.batchCarousel};
  background: ${(p) => p.theme.mainBackGround};
`;

export const CarouselTitle = styled.h2`
  margin-left: 1rem;
  margin-bottom: 1.5rem;
`;

export const CardContainer = styled.div`
  padding: 1px;
  width: 99.5%;
  height: 91%;
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;

  ${mediaQuery("mobile")`
    overflow-x: unset;
    overflow-y: scroll;
    flex-direction: column;
    gap: 0.5rem;
  `}
`;
