import styled, { keyframes } from "styled-components";
import { media } from "@/styles/mediatest";

export const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${(p) => p.theme.componentBgColor};
  width: 775px;
  height: 100vh;
  right: 0;
  bottom: 0;
  z-index: 30;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  ${media.mobile} {
    height: 80%;
    width: 100%;
    font-size: small;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 25px;
    animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.3s ease;
  }
`;
export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
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
