import styled from "styled-components";
import { media } from "@/styles/mediatest";
export const ThirdSectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 20px 0px;
  ${media.custom(640)} {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  text-align: start;
  width: 100%;
  font-size: xx-large;
  font-weight: bolder;
  padding: 10px 0;
  color: ${(p) => p.theme.colors.primary};
`;
