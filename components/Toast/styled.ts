import styled from "styled-components";
import { theme } from "../../styles/Theme";
export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 40px;
  z-index: 50;
`;

export const ToastItem = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ type }) =>
    type === "success" ? theme.brandColor.primary : "red"};
  padding: 10px 20px;
  cursor: pointer;
`;
export const ToastTitle = styled.div``;
export const ToastContent = styled.div``;
