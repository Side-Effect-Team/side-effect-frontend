import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 75px - 55px); // 헤더, 플로우박스 높이 제외
  background-color: ${(p) => p.theme.mainBackGround};
  overflow: hidden;
  ${media.mobile} {
    height: calc(100vh - 75px - 47px); // 헤더, 플로우박스 높이 제외
  }
`;
export const LandingImgWrapper = styled.div`
  width: 60vw;
  max-width: 1200px;
  ${media.mobile} {
    width: 90vw;
  }
`;
