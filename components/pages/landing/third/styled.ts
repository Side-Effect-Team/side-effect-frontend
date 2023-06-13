import { media } from "styles/media";
import styled, { keyframes } from "styled-components";

const slideAnimationSvg = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const slideAnimationText = keyframes`
  0% {
    transform: translateX(10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 95%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  ${media.mobile} {
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const SvgWrapper = styled.div`
  width: 50%;
  max-width: 500px;
  animation: ${slideAnimationSvg} 1s ease-out;
  ${media.mobile} {
    width: 80%;
  }
`;
export const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  animation: ${slideAnimationText} 1s ease-out;

  ${media.mobile} {
    width: auto;
  }
`;
export const ColorText = styled.div`
  font-size: 25px;
  color: ${(p) => p.theme.brandColor.primary};
  margin-bottom: 18px;
  font-weight: bold;
  ${media.mobile} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 130%;
  -webkit-text-stroke: 1px ${(p) => p.theme.textColor};
  margin-bottom: 7vh;
  flex-wrap: wrap;
  word-break: keep-all;
  ${media.mobile} {
    font-size: 25px;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 3vh;
  }
`;
export const SubText = styled.div`
  font-size: 22px;
  color: ${(p) => p.theme.colors.darkGray};
  line-height: 150%;
  word-break: keep-all;
  ${media.mobile} {
    font-size: 15px;
    line-height: 150%;
  }
`;
