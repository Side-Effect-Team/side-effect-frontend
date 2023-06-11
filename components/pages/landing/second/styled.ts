import styled, { keyframes } from "styled-components";
import { media } from "@/styles/mediatest";

const slideAnimation = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Wrapper = styled.div`
  width: 70vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 7vh 0;
  background-image: url("/images/landingSecond.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: right;
  ${media.mobile} {
    width: 80vw;
    background-position-x: center;
  }
`;

export const MainText = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  line-height: 130%;
  -webkit-text-stroke: 1px ${(p) => p.theme.textColor};
  margin-bottom: 13vh;
  animation: ${slideAnimation} 1s ease-out;
  ${media.mobile} {
    font-size: 25px;
    font-weight: 500;
    line-height: 130%;
    flex-wrap: wrap;
    word-break: keep-all;
  }
`;
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const SubText = styled.div`
  font-size: 22px;
  color: ${(p) => p.theme.colors.darkGray};
  text-align: center;
  line-height: 150%;
  ${media.mobile} {
    font-size: 15px;
    line-height: 150%;
  }
`;
