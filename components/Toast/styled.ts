import styled from "styled-components";

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 40px;
  z-index: 999;
`;

export const ToastItem = styled.div`
  display: flex;
  background-color: black;
  padding: 10px 20px;
  cursor: pointer;
`;
