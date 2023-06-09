import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const FlowContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
  font-size: 2.5rem;
  font-weight: 500;
  color: white;
  font-style: italic;
  font-size: 33px;
  width: 100%;
  background-color: ${(p) => p.theme.brandColor.primary};
  height: 66px;
  display: flex;
  align-items: center;

  ${media.mobile} {
    height: 47px;
    font-size: 20px;
  }
`;
export const FlowWrapper = styled.div`
  display: flex;
  align-items: center;
  animation: textLoop 5s linear infinite;
  padding-right: 15px;
  gap: 15px;
  ${media.mobile} {
    height: 47px;
    font-size: 20px;
    padding-right: 10px;
    gap: 10px;
  }

  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
`;
export const LightningSvg = styled.img`
  width: 30px;
  height: 30px;
  ${media.mobile} {
    width: 20px;
    height: 20px;
  }
`;
