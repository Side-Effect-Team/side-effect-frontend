import styled, { keyframes } from "styled-components";
import { media } from "@/styles/media";

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
  bottom: 20px;
  right: 25px;
  z-index: 99999;
  height: fit-content;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 10px;
  ${media.mobile} {
    top: 10px;
    left: 20px;
  }
`;
export const ToastItem = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  gap: 15px;
  max-width: 300px;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 15px;
  animation: ${slideIn} 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
  background-color: ${({ type }) =>
    type === "success" ? "#B2CCFF" : type === "error" ? "#FECDCA" : "#FEEE95"};
  ${media.mobile} {
    padding: 10px 20px;
  }
`;
export const ToastContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #000000;
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
  ${media.mobile} {
    font-size: small;
  }
`;
export const ToastIcon = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  color: ${({ type }) =>
    type === "success" ? "#2970FF" : type === "error" ? "#F04438" : "#EAAA08"};
`;
