import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";

export const Wrapper = styled.div`
  //padding: 1.5rem;
  width: 100%;
  height: ${(p) => p.theme.height.batchCarousel};
  background: aquamarine;
`;

export const CarouselTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  ${mediaQuery("mobile")`
    display: 
    overflow: auto;
  `}//display: grid;
  //justify-items: center;
  //grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  //row-gap: 1rem;
  //column-gap: 1rem;
  //overflow-x: hidden;
`;
