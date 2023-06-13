import styled, { keyframes } from "styled-components";
import { media } from "@/styles/media";
export const Title = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const MainTitle = styled.div`
  font-size: xx-large;
  font-weight: bolder;
  ${media.mobile} {
    font-size: large;
  }
`;
export const SubTitle = styled.div`
  font-size: large;
  font-weight: bolder;
  ${media.mobile} {
    font-size: small;
  }
`;
export const LogoWrapper = styled.div``;
export const TempLogo = styled.div``;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => isOpen && zoomIn} 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 650px;
  width: 550px;
  z-index: 30;
  border-radius: 25px;
  background-color: ${(p) => p.theme.mainBackGround};
  box-shadow: ${(p) => p.theme.boxShadow};
  ${media.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
    align-items: center;
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  position: absolute;
  top: 0;
`;

export const zoomIn = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 30px;
  ${media.mobile} {
    flex-direction: column;

    margin-top: 0 auto;
    width: 80%;
    gap: 0;
  }
`;
