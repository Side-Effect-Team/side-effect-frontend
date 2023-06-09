import styled, { useTheme } from "styled-components";
import { SectionContainer } from "../styled";
import { media } from "@/styles/mediatest";
import Lightning from "../../../../public/images/lightningIcon.svg";
import LandingFirst from "../../../../public/images/landingFirst.svg";

export default function FirstSection() {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Container>
        <Wrapper>
          <LandingImgWrapper>
            <LandingFirst fill={theme.textColor} />
          </LandingImgWrapper>
        </Wrapper>
        <FlowContainer>
          {Array(15)
            .fill(1)
            .map((el, index) => (
              <FlowWrapper key={index}>
                <p>SIDE EFFECT</p>
                <IconWrapper>
                  <Lightning fill={theme.mainBackGround} height="100%" />
                </IconWrapper>
              </FlowWrapper>
            ))}
        </FlowContainer>
      </Container>
    </SectionContainer>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 75px - 66px); // 헤더, 플로우박스 높이 제외
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

export const FlowContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${(p) => p.theme.mainBackGround};
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
  z-index: 10;
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
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 30px;
  ${media.mobile} {
    width: 15px;
    height: 20px;
  }
`;
