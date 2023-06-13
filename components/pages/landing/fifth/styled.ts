import styled from "styled-components";
import { media } from "@/styles/mediatest";
export const FifthSectionContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
  padding: 40px;
  width: 100%;
  flex-direction: column;
  ${media.mobile} {
    padding: 0;
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
export const SectionWrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  ${media.mobile} {
    flex-direction: column;
  }
`;
