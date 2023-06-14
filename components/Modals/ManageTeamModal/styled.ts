import styled, { keyframes } from "styled-components";
import { media } from "styles/media";

export const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.4s ease-in-out;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${(p) => p.theme.mainBackGround};
  width: 775px;
  height: 100vh;
  right: 0;
  bottom: 0;
  z-index: 9999;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: ${(p) => p.theme.boxShadow};
  ${media.mobile} {
    height: 80%;
    width: 100%;
    font-size: small;
    border-bottom-left-radius: 0;
    border-top-right-radius: 25px;
    animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.4s
      ease-in-out;
  }
`;
export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${(p) => p.theme.colors.darkGray};
  padding: 20px;
`;
export const ManageSection = styled.section`
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const slideIn = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
`;
export const slideOut = keyframes`
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(100%);
  }
`;
export const slideUp = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }
`;
export const slideDown = keyframes`
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(100%);
  }
`;
