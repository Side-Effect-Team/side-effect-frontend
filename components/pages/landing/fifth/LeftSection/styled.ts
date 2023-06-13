import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";
const slideUp = keyframes`
  0%{
    opacity: 0;
    transform: translateY(100%);
  }
  100%{
    opacity: 1;
    transform: translateY(0%);

  }
`;
export const ImageWrapper = styled(Link)`
  flex: 5;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  animation: ${slideUp} 0.3s ease-in-out;
`;
