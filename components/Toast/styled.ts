import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/Theme";
import { media } from "@/styles/mediatest";

const slideIn = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0%);
    }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 25px;
  z-index: 50;
  height: fit-content;
  ${media.mobile} {
    top: 0;
    left: 20px;
  }
`;
export const ToastItem = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 30px;
  cursor: pointer;
  margin-top: 8px;
  border-radius: 15px;
  background-color: ${({ type }) =>
    type === "success" ? theme.brandColor.primary : "red"};
  color: white;
  animation: ${slideIn} 0.3s ease;
  ${media.mobile} {
    padding: 10px 20px;
  }
`;
export const ToastContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ToastTitle = styled.div`
  font-size: large;
  font-weight: bold;
  ${media.mobile} {
    font-size: small;
    font-weight: bold;
  }
`;
export const ToastContent = styled.div`
  width: max-content;
  ${media.mobile} {
    font-size: small;
  }
`;
